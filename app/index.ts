import {
  Scene, PerspectiveCamera, WebGLRenderer, BoxGeometry, MeshBasicMaterial, Mesh,
} from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import {
  LitElement, html, css, customElement, property,
} from 'lit-element';
import renderApp from './app';
import './elements/three-renderer';
import './elements/three-scene';
import './elements/three-camera';
import './elements/three-controls';
import './elements/map-scene';

@customElement('perspective-app')
class PerspectiveApp extends LitElement {
  constructor() {
    super();

    window.addEventListener('resize', this.handleResize);
  }

  handleResize = () => {
    this.width = window.innerWidth;
    this.height = window.innerHeight;
  }

  static getStyles() {
    return css`
      :host {
        height: 100%;
        width: 100%;
      }
    `;
  }

  @property({ type: Number, attribute: false })
  width = window.innerWidth;

  @property({ type: Number, attribute: false })
  height = window.innerHeight;

  render = () => html`<three-renderer clear-color="red" width="${this.width}" height="${this.height}">
            <three-scene>
              <map-scene map="Music"><map-scene>
            </three-scene>
            <three-camera></three-camera>
            <three-controls></three-controls>
    </three-renderer>`
}
