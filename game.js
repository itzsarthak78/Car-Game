import * as THREE from "https://cdn.jsdelivr.net/npm/three@0.160.0/build/three.module.js";

const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(
75,
window.innerWidth/window.innerHeight,
0.1,
1000
);

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth,window.innerHeight);

document.body.appendChild(renderer.domElement);

const cube = new THREE.Mesh(
new THREE.BoxGeometry(),
new THREE.MeshBasicMaterial({color:"red"})
);

scene.add(cube);

camera.position.z = 5;

function animate(){
requestAnimationFrame(animate);
cube.rotation.y += 0.01;
renderer.render(scene,camera);
}

animate();
