import {
  LitElement, html, css, customElement, property,
} from 'lit-element';
import { WebGLRenderer } from 'three';
import api from '../api';
import './three-scene';

@customElement('map-scene')
class MapScene extends LitElement {
  constructor() {
    super();
  }

  connectedCallback = () => {
    api.getMap()
      .then((res) => {
        this.map = res.data.Map[0];
      });
  }

  @property({ attribute: false })
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

  render = () => html`<slot></slot>`
}
