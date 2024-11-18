// script.js
document.addEventListener('DOMContentLoaded', () => {
    // Perguntas e Respostas do Quiz
    const questions = [
        // Suas 30 perguntas aqui (mantendo o formato que já definimos)
        {
            question: "Qual é o motor mais comum em carros compactos?",
            options: ["V4", "V6", "V8", "V12"],
            answer: 0
        },
        {
            question: "Qual motor é mais eficiente para carros esportivos?",
            options: ["V4", "V6", "V8", "V12"],
            answer: 2
        },
        {
            question: "Qual é o motor mais potente?",
            options: ["V6", "V8", "V10", "V12"],
            answer: 3
        },
        // ... outras 27 perguntas aqui
    ];

    let userAnswers = [];

    const quizContainer = document.getElementById('quiz-container');

    // Renderiza as perguntas do quiz
    function renderQuiz() {
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

    // Função para submeter as respostas
    function submitQuiz() {
        userAnswers = [];
        let score = 0;

        questions.forEach((q, index) => {
            const selected = document.querySelector(`input[name="question${index}"]:checked`);
            if (selected) {
                const answer = parseInt(selected.value);
                userAnswers.push(answer);
                if (answer === q.answer) {
                    score++;
                }
            } else {
                userAnswers.push(-1); // Nenhuma resposta
            }
        });

        // Exibe o resultado
        if (score === questions.length) {
            alert("Parabéns! Você acertou todas as perguntas!");
            confetti.start(); // Confetes para quem acertou tudo
        } else {
            alert(`Você acertou ${score} de ${questions.length}. Tente novamente!`);
        }
    }

    renderQuiz();

    // Animações de confetes
    const confetti = new ConfettiGenerator({
        target: 'confetti-container',
        max: 100,
        size: 1,
        animate: true,
        respawn: true
    });
});