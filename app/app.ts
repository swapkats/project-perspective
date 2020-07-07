import { BoxGeometry, MeshBasicMaterial, Mesh } from 'three';
import { getMap } from './api';

const app = ({ scene }) => {
  const geometry = new BoxGeometry();
  const material = new MeshBasicMaterial({ color: 0x00ff00 });
  const cube = new Mesh(geometry, material);
  scene.add(cube);
  getMap();
};

export default app;
