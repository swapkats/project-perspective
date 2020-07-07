import {
  MeshBasicMaterial, DoubleSide, Mesh, ShapeBufferGeometry, Font,
} from 'three';
// @ts-ignore
import fontJson from './fonts/helvetiker_regular.typeface.json';

const font = new Font(fontJson);

const text = ({ message }) => {
  const color = 0x006699;

  const matLite = new MeshBasicMaterial({
    color,
    transparent: true,
    opacity: 0.4,
    side: DoubleSide,
  });

  const shapes = font.generateShapes(message, 100);

  const geometry = new ShapeBufferGeometry(shapes);

  geometry.computeBoundingBox();

  const xMid = -0.5 * (geometry.boundingBox.max.x - geometry.boundingBox.min.x);

  geometry.translate(xMid, 0, 0);

  // make shape ( N.B. edge view not visible )

  const textMesh = new Mesh(geometry, matLite);
  textMesh.position.z = -150;
  return textMesh;
};

export default text;
