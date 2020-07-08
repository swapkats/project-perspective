import {
  LitElement, html, css, customElement, property,
} from 'lit-element';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import cameraContext from '../cameraContext';
import rendererContext from '../rendererContext';

@customElement('three-controls')
export default class ThreeControls extends LitElement {
  firstUpdated() {
    super.firstUpdated();
    const controls = new OrbitControls(cameraContext.useCamera(), rendererContext.useRenderer().domElement);
    controls.update();
  }
}
