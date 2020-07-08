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

  render = () => (this.map ? html`<three-text text="${this.map.root}"></three.text>` : html``)
}
