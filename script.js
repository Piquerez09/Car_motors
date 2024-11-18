document.addEventListener('DOMContentLoaded', () => {
    // Função para iniciar o Quiz
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

    // Efeitos 3D e Interatividade com a Partícula de Ouro
    const canvas = document.getElementById('3d-car-canvas');
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles = [];
    
    function Particle(x, y) {
        this.x = x;
        this.y = y;
        this.size = Math.random() * 5 + 1;
        this.speedX = Math.random() * 3 - 1.5;
        this.speedY = Math.random() * 3 - 1.5;
        this.color = 'rgba(255, 223, 0, 0.8)';
    }

    Particle.prototype.update = function () {
        this.x += this.speedX;
        this.y += this.speedY;
        if (this.size > 0.1) this.size -= 0.1;
    };

    Particle.prototype.draw = function () {
        ctx.fillStyle = this.color;
        ctx.strokeStyle = 'gold';
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.closePath();
        ctx.fill();
        ctx.stroke();
    };

    function animateParticles(e) {
        const xPos = e.x;
        const yPos = e.y;
        for (let i = 0; i < 5; i++) {
            particles.push(new Particle(xPos, yPos));
        }
    }

    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        for (let i = 0; i < particles.length; i++) {
            particles[i].update();
            particles[i].draw();
            if (particles[i].size <= 0.2) {
                particles.splice(i, 1);
                i--;
            }
        }
        requestAnimationFrame(animate);
    }

    canvas.addEventListener('mousemove', animateParticles);
    animate();
});