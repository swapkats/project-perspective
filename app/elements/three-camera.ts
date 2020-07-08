import {
  LitElement, html, css, customElement, property,
} from 'lit-element';
import { PerspectiveCamera } from 'three';

@customElement('three-camera')
export default class ThreeCamera extends LitElement {
  constructor() {
    super();
    const camera = new PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 5;
  }
}
