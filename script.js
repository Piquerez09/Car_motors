document.addEventListener('DOMContentLoaded', () => {
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
            },
            hover: {
                onHover: function(e) {
                    const point = comparativoGrafico.getElementAtEvent(e);
                    if (point.length) {
                        e.target.style.cursor = 'pointer'; // Muda o cursor para interatividade
                        const motor = point[0].index; // Pegando o índice do motor
                        tocarAudio(motor); // Função para tocar o som
                    } else {
                        e.target.style.cursor = 'default';
                    }
                }
            }
        }
    });

    // Função para tocar o som do motor
    function tocarAudio(motorIndex) {
        const audios = [
            new Audio('v4.mp3'), // Som do motor V4
            new Audio('v6.mp3'), // Som do motor V6
            new Audio('v8.mp3'), // Som do motor V8
            new Audio('v10.mp3'), // Som do motor V10
            new Audio('v12.mp3')  // Som do motor V12
        ];
        audios[motorIndex].play();
    }
});