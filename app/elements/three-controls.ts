import {
  LitElement, html, css, customElement, property,
} from 'lit-element';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

@customElement('three-controls')
export default class ThreeControls extends LitElement {
  constructor() {
    super();
    // const controls = new OrbitControls(camera, renderer.domElement);
    // controls.update();
  }
}
