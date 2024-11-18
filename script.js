document.addEventListener('DOMContentLoaded', () => {
    // Carregar o modelo 3D da Lamborghini
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ canvas: document.getElementById('3d-car-canvas') });
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);

    const loader = new THREE.GLTFLoader();
    loader.load('models/lamborghini.glb', (gltf) => {
        scene.add(gltf.scene);
        gltf.scene.scale.set(0.5, 0.5, 0.5);  // Ajuste de escala do modelo
    });

    const light = new THREE.AmbientLight(0x404040, 2);
    scene.add(light);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
    directionalLight.position.set(5, 5, 5).normalize();
    scene.add(directionalLight);

    camera.position.z = 5;

    function animate() {
        requestAnimationFrame(animate);
        scene.rotation.y += 0.005;
        renderer.render(scene, camera);
    }
    animate();

    // Função para iniciar o Quiz
    function startQuiz() {
        const questions = [
            {
                question: "Qual motor é mais usado em carros esportivos?",
                options: ["V4", "V6", "V8", "V12"],
                answer: 2
            },
            {
                question: "Qual é o motor mais potente?",
                options: ["V6", "V8", "V10", "V12"],
                answer: 3
            },
            {
                question: "Qual carro famoso usa o motor V10?",
                options: ["Lamborghini Gallardo", "Chevrolet Camaro", "Honda Civic", "BMW X5"],
                answer: 0
            }
        ];

        let score = 0;

        questions.forEach((q) => {
            const userAnswer = prompt(`${q.question}\n${q.options.join("\n")}`);
            if (userAnswer === q.options[q.answer]) {
                score++;
            }
        });

        alert(`Seu resultado é ${score} de ${questions.length}`);
    }

    // Inicia o Quiz
    document.querySelector('.quiz-button').addEventListener('click', startQuiz);
});
