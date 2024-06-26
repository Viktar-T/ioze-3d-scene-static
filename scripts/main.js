import * as THREE from 'https://cdn.skypack.dev/three@0.130.1';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.getElementById('scene-container').appendChild(renderer.domElement);

// Load model
const loader = new THREE.GLTFLoader();
loader.load('assets/model.glb', function (gltf) {
    scene.add(gltf.scene);
    renderer.render(scene, camera);
});

// Set camera position
camera.position.z = 5;

function animate() {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
}

animate();
