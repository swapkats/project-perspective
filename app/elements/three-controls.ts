import {
  LitElement, html, css, customElement, property,
} from 'lit-element';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { TransformControls } from 'three/examples/jsm/controls/TransformControls';
import cameraContext from '../contexts/cameraContext';
import rendererContext from '../contexts/rendererContext';

@customElement('three-controls')
export default class ThreeControls extends LitElement {
  firstUpdated() {
    super.firstUpdated();
    let controls = new OrbitControls(cameraContext.useCamera(), rendererContext.useRenderer().domElement);
    // controls.update();
    // let control = new TransformControls( cameraContext.useCamera(), rendererContext.useRenderer().domElement );
  }
}
