document.addEventListener('DOMContentLoaded', () => {
    // Função para iniciar o Quiz
    function startQuiz() {
        const questions = [
            {
                question: "Qual motor é mais usado em carros esportivos?",
                options: ["V4", "V6", "V8", "V12"],
                correctAnswer: "V8"
            },
            {
                question: "O que é um motor V12?",
                options: ["6 cilindros em V", "12 cilindros em V", "4 cilindros em linha", "12 cilindros em linha"],
                correctAnswer: "12 cilindros em V"
            }
        ];

        let score = 0;
        questions.forEach(q => {
            let answer = prompt(q.question + "\n" + q.options.join("\n"));
            if (answer === q.correctAnswer) {
                score++;
            }
        });
        alert(`Seu Score: ${score} de ${questions.length}`);
    }

    // Função 3D com Three.js
    const canvas = document.getElementById('3d-car-canvas');
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ canvas: canvas });
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);

    // Criando um Cubo como placeholder para o carro
    const geometry = new THREE.BoxGeometry();
    const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
    const cube = new THREE.Mesh(geometry, material);
    scene.add(cube);

    camera.position.z = 5;

    function animate() {
        requestAnimationFrame(animate);

        cube.rotation.x += 0.01;
        cube.rotation.y += 0.01;

        renderer.render(scene, camera);
    }

    animate();
});
