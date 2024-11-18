document.addEventListener('DOMContentLoaded', () => {
    // Inicia o modelo 3D do carro (Lamborghini ou Ferrari)
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ canvas: document.getElementById('carro-3d-container') });
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);

    const loader = new THREE.GLTFLoader();
    loader.load('assets/lamborghini.glb', (gltf) => {
        scene.add(gltf.scene);
        gltf.scene.scale.set(0.5, 0.5, 0.5);  // Ajuste de escala para o modelo
        gltf.scene.position.set(0, -1, 0);  // Ajuste de posição para centralizar o modelo
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
            },
            {
                question: "Qual o motor mais comum em carros de luxo?",
                options: ["V4", "V6", "V8", "V12"],
                answer: 1
            }
        ];

        let score = 0;

        questions.forEach((q) => {
            const userAnswer = prompt(`${q.question}\n${q.options.join("\n")}`);
            if (userAnswer === q.options[q.answer]) {
                score++;
            }
        });

        if (score === questions.length) {
            showConfetti();
            alert(`Parabéns! Você acertou todas as perguntas.`);
        } else {
            alert(`Que pena! Você acertou ${score} de ${questions.length}. Dê uma olhada no site para melhorar seus conhecimentos.`);
        }
    }

    // Função para mostrar confetes
    function showConfetti() {
        const confetti = canvasConfetti.create(document.getElementById('carro-3d-container'), {
            resize: true,
            useWorker: true
        });

        confetti({ particleCount: 200, spread: 70, origin: { y: 0.6 } });
    }
});
