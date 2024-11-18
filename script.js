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

    // Função de confetes
    function showConfetti() {
        const confetti = document.createElement('div');
        confetti.classList.add('confetti');
        document.body.appendChild(confetti);
        setTimeout(() => {
            confetti.remove();
        }, 10000); // Confetes por 10 segundos
    }

    // Inicia o Quiz
    document.querySelector('.quiz-button').addEventListener('click', startQuiz);
});
