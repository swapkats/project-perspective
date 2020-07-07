import {
  Scene, PerspectiveCamera, WebGLRenderer, BoxGeometry, MeshBasicMaterial, Mesh,
} from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import renderApp from './app';

const scene = new Scene();

const camera = new PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

const renderer = new WebGLRenderer();
renderer.setClearColor('#111');
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

renderApp({ scene });

camera.position.z = 5;
const controls = new OrbitControls(camera, renderer.domElement);

const render = () => {
  renderer.render(scene, camera);
};

const animate = () => {
  requestAnimationFrame(animate);

  // controls.update(); // only required if controls.enableDamping = true, or if controls.autoRotate = true

  render();
};

animate();

controls.update();

const resize = () => {
  renderer.setSize(window.innerWidth, window.innerHeight);
};

window.addEventListener('resize', resize);
