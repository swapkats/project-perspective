import {
  LitElement, html, css, customElement, property, internalProperty,
} from 'lit-element';
import { WebGLRenderer, Scene, Camera } from 'three';
import sceneContext from '../sceneContext';
import cameraContext from '../cameraContext';
import rendererContext from '../rendererContext';

@customElement('three-renderer')
export default class ThreeRenderer extends LitElement {
  constructor() {
    super();
    this.renderer = new WebGLRenderer();
    this.renderer.setClearColor(this.clearColor);
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    rendererContext.setRenderer(this.renderer);
    this.appendChild(this.renderer.domElement);
  }

  @property({ type: String, attribute: 'clear-color' })
  clearColor = '#000';

  @property({ type: Number, reflect: true })
  width = 0;

  @property({ type: Number, reflect: true })
  height = 0;

  @internalProperty()
  renderer: WebGLRenderer;

  animateRenderer = (scene: Scene, camera: Camera) => {
    requestAnimationFrame(() => this.animateRenderer(scene, camera));

    this.renderer.render(scene, camera);
  }

  firstUpdated = () => {
    super.firstUpdated();

    this.animateRenderer(sceneContext.useScene(), cameraContext.useCamera());
  }

  attributeChangedCallback = (name: string, old: any, value: any) => {
    super.attributeChangedCallback(name, old, value);

    console.debug(`${name} changed`);
    switch (name) {
      case 'clear-color':
        this.renderer.setClearColor(value);
        break;
      case 'width':
        this.renderer.setSize(value, this.height);
        break;
      case 'height':
        this.renderer.setSize(this.width, value);
        break;
      default:
        console.debug(`${name} changed`);
    }
  }

  static getStyles() {
    return css`
      :host {
        display: block;
        height: 100%;
        width: 100%;
      }
    `;
  }

  render = () => html`<slot></slot>`
}
