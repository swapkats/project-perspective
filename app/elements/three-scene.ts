import {
  LitElement, html, css, customElement, property, internalProperty,
} from 'lit-element';
import { WebGLRenderer, Scene } from 'three';

@customElement('three-scene')
class ThreeScene extends LitElement {
  constructor() {
    super();
    this.scene = new Scene();
  }

  @internalProperty()
  scene: Scene;

  render = () => html`<slot></slot>`
}
