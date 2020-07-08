import {
  LitElement, html, css, customElement, property, internalProperty,
} from 'lit-element';
import { WebGLRenderer, Scene } from 'three';
import sceneContext from '../sceneContext';

@customElement('three-scene')
class ThreeScene extends LitElement {
  constructor() {
    super();
    this.scene = new Scene();
    sceneContext.setScene(this.scene)
  }

  @internalProperty()
  scene: Scene;

  render = () => html`<slot></slot>`
}
