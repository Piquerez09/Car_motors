document.addEventListener('DOMContentLoaded', () => {
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
            // 26 Perguntas adicionais
            {
                question: "Qual motor é o mais econômico?",
                options: ["V4", "V6", "V8", "V12"],
                answer: 0
            },
            {
                question: "Qual motor foi usado no Ferrari F12?",
                options: ["V6", "V8", "V10", "V12"],
                answer: 3
            },
            {
                question: "Qual motor tem o maior torque?",
                options: ["V6", "V8", "V10", "V12"],
                answer: 3
            },
            // Continue adicionando perguntas conforme necessário
        ];

        let score = 0;

        questions.forEach((q, index) => {
            const userAnswer = prompt(`${q.question}\n${q.options.join("\n")}`);
            if (userAnswer === q.options[q.answer]) {
                score++;
            }
        });

        alert(`Seu resultado é ${score} de ${questions.length}`);

        // Se acertar tudo, animação de confetes
        if (score === questions.length) {
            confetti();
        } else {
            alert("Que pena, você errou. Dê uma olhada no site para melhorar seus conhecimentos.");
        }
    }

    // Função para gerar confetes
    function confetti() {
        let count = 200;
        let defaults = {
            origin: { y: 0.7 }
        };
        while (count--) {
            confetti({
                ...defaults,
                particleCount: Math.floor(Math.random() * 5 + 5),
                angle: Math.random() * 360,
                spread: Math.random() * 30,
                startVelocity: 30,
                drift: Math.random() * 5,
                ticks: 60,
                color: 'gold',
            });
        }
    }

    // 3D Carro - Use Three.js para renderizar um carro 3D (Ferrari ou Lamborghini)
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ canvas: document.getElementById('3d-car-canvas') });
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);

    // Carregar modelo 3D do carro
    const loader = new THREE.GLTFLoader();
    loader.load('modelo_carro_lamborghini.glb', (gltf) => {
        const car = gltf.scene;
        scene.add(car);
        car.scale.set(2, 2, 2);
        car.position.set(0, 0, -5);

        // Animação
        function animate() {
            requestAnimationFrame(animate);
            car.rotation.y += 0.01; // Gira o carro
            renderer.render(scene, camera);
        }

        animate();
    });

    camera.position.z = 5;

    // Adicionando eventos para ajustar o tamanho da tela
    window.addEventListener('resize', () => {
        renderer.setSize(window.innerWidth, window.innerHeight);
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
    });
});
