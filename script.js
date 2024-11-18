document.addEventListener('DOMContentLoaded', () => {
    // Quiz do Carro
    function startQuiz() {
        alert("Bem-vindo ao quiz! Vamos testar seus conhecimentos sobre carros!");

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

        questions.forEach((q, index) => {
            const userAnswer = prompt(`${q.question}\n${q.options.join("\n")}`);
            if (userAnswer === q.options[q.answer]) {
                score++;
            }
        });

        alert(`Seu resultado é ${score} de ${questions.length}`);
    }

    // Configuração do gráfico de comparativo
    const ctx = document.getElementById('comparativoGrafico').getContext('2d');
    const comparativoGrafico = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['V4', 'V6', 'V8', 'V10', 'V12'],
            datasets: [{
                label: 'Potência (cv)',
                data: [150, 300, 500, 600, 800],
                backgroundColor: ['#3498db', '#e74c3c', '#2ecc71', '#f39c12', '#9b59b6'],
                borderColor: ['#2980b9', '#c0392b', '#27ae60', '#f1c40f', '#8e44ad'],
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            plugins: {
                title: {
                    display: true,
                    text: 'Comparativo de Potência entre os Motores'
                },
                tooltip: {
                    callbacks: {
                        label: function(tooltipItem) {
                            return tooltipItem.label + ': ' + tooltipItem.raw + ' cv';
                        }
                    }
                }
            }
        }
    });

    // Função para tocar som do motor
    function tocarAudio(index) {
        const audio = [
            new Audio('audio/v4.mp3'),
            new Audio('audio/v6.mp3'),
            new Audio('audio/v8.mp3'),
            new Audio('audio/v10.mp3'),
            new Audio('audio/v12.mp3')
        ];
        audio[index].play();
    }

    comparativoGrafico.options.hover.onHover = function(e) {
        const point = comparativoGrafico.getElementAtEvent(e);
        if (point.length) {
            e.target.style.cursor = 'pointer';
            tocarAudio(point[0].index);
        } else {
            e.target.style.cursor = 'default';
        }
    };

    // 3D Car Viewer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.getElementById('3d-car-canvas').appendChild(renderer.domElement);

    const geometry = new THREE.BoxGeometry(1, 1, 1);  // Para exemplificar
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