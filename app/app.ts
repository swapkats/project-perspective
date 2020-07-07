import { BoxGeometry, MeshBasicMaterial, Mesh } from 'three';
import api from './api';
import text from './elements/text';

const app = ({ scene }) => {
  api.getMap()
    .then((res) => {
      scene.add(text({ message: res.data.Map[0].root }));
    });
};

export default app;
