import {
  LitElement, html, css, customElement, property,
} from 'lit-element';
import api from '../api';
import './three-text';

@customElement('map-scene')
class MapScene extends LitElement {
  firstUpdated = (_) => {
    super.firstUpdated(_);
    // if (this.map || !this.mapId) return;
    api.getMap(this.mapId)
      .then((res) => {
        // this.setAttribute('map', JSON.stringify(res.data.Map[0]));
        this.map = res.data.Map[0];
        this.requestUpdate();
      })
      .catch(console.error);
  }

  @property({ attribute: 'map-id' })
  mapId = null;

  @property({ type: Object, attribute: false })
  map = null;

  static getStyles() {
    return css`
      :host {
        // display: block;
        // height: 100%;
        // width: 100%;
      }
    `;
  }

  renderRootNode = () => html`<three-text text="${this.map.root}" posX="0" posY="0" posZ="0"></three.text>`

  renderSubNodes = () => html`
    ${this.map.nodes.map((node, index) => html`<three-text text="${node.text}" pos-x="${Math.random() * 200}" pos-y="0" pos-z="0"></three.text>`)}
  `

  render = () => (this.map ? html`
    ${this.renderRootNode()}
    ${this.renderSubNodes()}
  ` : html``)
}
