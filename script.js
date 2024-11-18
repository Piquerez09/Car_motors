document.addEventListener('DOMContentLoaded', () => {

    // Configuração do Three.js
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ canvas: document.getElementById('3d-car-canvas') });
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);

    // Carregando o Modelo 3D (Ferrari ou Lamborghini)
    const loader = new THREE.GLTFLoader();
    loader.load('models/lamborghini.glb', (gltf) => {
        scene.add(gltf.scene);
        gltf.scene.scale.set(0.5, 0.5, 0.5); // Ajustando o tamanho do carro
    });

    // Configuração da luz
    const light = new THREE.AmbientLight(0x404040, 2);  // Luz ambiente suave
    scene.add(light);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
    directionalLight.position.set(5, 5, 5).normalize();
    scene.add(directionalLight);

    camera.position.z = 5;

    // Animação da cena
    function animate() {
        requestAnimationFrame(animate);
        scene.rotation.y += 0.005;
        renderer.render(scene, camera);
    }
    animate();

});
