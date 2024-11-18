// script.js
document.addEventListener('DOMContentLoaded', () => {
    const quizButton = document.getElementById('quiz-button');
    const quizSection = document.getElementById('quiz');
    const quizContainer = document.getElementById('quiz-container');
    const submitButton = document.getElementById('submit');
    const quizResult = document.getElementById('quiz-result');
    const scoreDisplay = document.getElementById('quiz-score');
    const confettiContainer = document.getElementById('confetti');
    
    // Perguntas do Quiz
    const questions = [
        {
            question: "Qual é o motor mais comum em carros esportivos?",
            options: ["V4", "V6", "V8", "V12"],
            answer: 2
        },
        {
            question: "Qual é o motor mais potente?",
            options: ["V6", "V8", "V10", "V12"],
            answer: 3
        },
        {
            question: "Qual motor é usado no famoso Ferrari 488 GTB?",
            options: ["V6", "V8", "V10", "V12"],
            answer: 1
        },
        {
            question: "Qual motor é ideal para carros de corrida?",
            options: ["V6", "V8", "V10", "V12"],
            answer: 2
        },
        // Adicione até 30 perguntas aqui
    ];

    let userAnswers = [];

    // Função para renderizar o quiz
    function renderQuiz() {
        quizContainer.innerHTML = '';
        questions.forEach((q, index) => {
            const questionHTML = `
                <div class="question">
                    <h3>${q.question}</h3>
                    <div>
                        ${q.options.map((option, i) => `
                            <label>
                                <input type="radio" name="question${index}" value="${i}">${option}
                            </label>
                        `).join('')}
                    </div>
                </div>
            `;
            quizContainer.innerHTML += questionHTML;
        });
    }

    // Função para mostrar o quiz
    quizButton.addEventListener('click', () => {
        document.querySelector('section').style.display = 'none';
        quizSection.style.display = 'block';
        renderQuiz();
    });

    // Função para enviar as respostas do quiz
    function submitQuiz() {
        let score = 0;
        questions.forEach((q, index) => {
            const selected = document.querySelector(`input[name="question${index}"]:checked`);
            if (selected) {
                const answer = parseInt(selected.value);
                if (answer === q.answer) {
                    score++;
                }
            }
        });

        scoreDisplay.innerHTML = `Você acertou ${score} de ${questions.length} perguntas.`;
        quizResult.style.display = 'block';

        if (score === questions.length) {
            showConfetti();
        } else {
            alert("Que pena, você errou! Tente novamente!");
        }
    }

    // Função para mostrar os confetes
    function showConfetti() {
        confettiContainer.style.display = 'block';
        const confetti = new ConfettiGenerator({
            target: 'confetti',
            max: 100,
            size: 1,
            animate: true,
            respawn: true
        });
        confetti.start();
        setTimeout(() => {
            confetti.stop();
            confettiContainer.style.display = 'none';
        }, 5000);
    }

});