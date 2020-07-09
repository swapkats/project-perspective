import {
  MeshBasicMaterial, DoubleSide, Mesh, ShapeBufferGeometry, Font, TextGeometry,
} from 'three';
// @ts-ignore
import { LitElement, customElement, property } from 'lit-element';
import fontJson from './fonts/helvetiker_regular.typeface.json';
import sceneContext from '../contexts/sceneContext';

const font = new Font(fontJson);

@customElement('three-text')
class ThreeText extends LitElement {
  @property()
  text = '';

  @property({ type: Number, attribute: 'pos-x' })
  posX = 0;

  @property({ type: Number, attribute: 'pos-y' })
  posY = 0;

  @property({ type: Number, attribute: 'pos-z' })
  posZ = 0;

  @property({ type: Number })
  size = 5;

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

    const geometry = new TextGeometry(this.text, {
      size: this.size,
      height: 1,
      curveSegments: 12,
      font,
    });

    geometry.translate(this.posX, this.posY, this.posZ);

    const textMesh = new Mesh(geometry, matLite);

    sceneContext.useScene().add(textMesh);
  }
}
