import {
  MeshBasicMaterial, DoubleSide, Mesh, ShapeBufferGeometry, Font,
} from 'three';
// @ts-ignore
import { LitElement, customElement, property } from 'lit-element';
import fontJson from './fonts/helvetiker_regular.typeface.json';
import sceneContext from '../sceneContext';

const font = new Font(fontJson);

@customElement('three-text')
class ThreeText extends LitElement {
  // constructor() {
  //   super();

    
  // }

  @property()
  text = '';

  @property()
  color = '#fff';

  firstUpdated = () => {
    super.firstUpdated();
    const matLite = new MeshBasicMaterial({
      color: this.color,
      transparent: true,
      opacity: 0.9,
      side: DoubleSide,
    });

    const shapes = font.generateShapes(this.text, 100);

    const geometry = new ShapeBufferGeometry(shapes);

    geometry.computeBoundingBox();

    const xMid = -0.5 * (geometry.boundingBox.max.x - geometry.boundingBox.min.x);

    geometry.translate(xMid, 0, 0);

    // make shape ( N.B. edge view not visible )

    const textMesh = new Mesh(geometry, matLite);
    textMesh.position.z = -150;

    sceneContext.useScene().add(textMesh);
  }
}
