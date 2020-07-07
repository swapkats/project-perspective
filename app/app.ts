import { BoxGeometry, MeshBasicMaterial, Mesh } from 'three';
import api from './api';

const app = ({ scene }) => {
  const geometry = new BoxGeometry();
  const material = new MeshBasicMaterial({ color: 0x00ff00 });
  const cube = new Mesh(geometry, material);
  scene.add(cube);
  api.getMap();
};

export default app;
