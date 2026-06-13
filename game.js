import * as THREE from "https://cdn.jsdelivr.net/npm/three@0.160.0/build/three.module.js";

const scene = new THREE.Scene();
scene.background = new THREE.Color(0x87ceeb);

const camera = new THREE.PerspectiveCamera(
75,
window.innerWidth/window.innerHeight,
0.1,
1000
);

const renderer = new THREE.WebGLRenderer({antialias:true});
renderer.setSize(window.innerWidth,window.innerHeight);
document.body.appendChild(renderer.domElement);

// Light
const light = new THREE.DirectionalLight(0xffffff,2);
light.position.set(10,20,10);
scene.add(light);

scene.add(new THREE.AmbientLight(0xffffff,0.5));

// Ground
const ground = new THREE.Mesh(
new THREE.BoxGeometry(200,1,200),
new THREE.MeshStandardMaterial({color:"green"})
);

ground.position.y = -1;
scene.add(ground);

// Road
const road = new THREE.Mesh(
new THREE.BoxGeometry(20,0.2,200),
new THREE.MeshStandardMaterial({color:"#333"})
);

scene.add(road);

camera.position.set(0,10,20);
camera.lookAt(0,0,0);

function animate(){
requestAnimationFrame(animate);
renderer.render(scene,camera);
}

animate();
