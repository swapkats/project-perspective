import {
  LitElement, html, css, customElement, property, internalProperty,
} from 'lit-element';
import { WebGLRenderer } from 'three';

@customElement('three-renderer')
export default class ThreeRenderer extends LitElement {
  constructor() {
    super();
    this.renderer = new WebGLRenderer();
    this.renderer.setClearColor(this.clearColor);
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    this.appendChild(this.renderer.domElement);

    // const render = () => {
    //   renderer.render(scene, camera);
    // };

    // const animate = () => {
    //   requestAnimationFrame(animate);

    //   // controls.update(); // only required if controls.enableDamping = true, or if controls.autoRotate = true

    //   render();
    // };

    // animate();
  }

  @property({ type: String, attribute: 'clear-color' })
  clearColor = 'red';

  @property({ type: Number, reflect: true })
  width = 0;

  @property({ type: Number, reflect: true })
  height = 0;

  @internalProperty()
  renderer: WebGLRenderer;

  animateRenderer = () => {
    requestAnimationFrame(this.animateRenderer);

    // TODO: implement this
    // this.renderer.render(scene, camera);
  }

  connectedCallback = () => {
    super.connectedCallback();

    this.animateRenderer();
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
