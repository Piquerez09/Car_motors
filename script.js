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
                        e.target.style.cursor = 'pointer';
                        const motor = point[0].index;
                        tocarAudio(motor);
                    } else {
                        e.target.style.cursor = 'default';
                    }
                }
            }
        }
    });

    function tocarAudio(motorIndex) {
        const audios = [
            new Audio('audio/v4.mp3'),
            new Audio('audio/v6.mp3'),
            new Audio('audio/v8.mp3'),
            new Audio('audio/v10.mp3'),
            new Audio('audio/v12.mp3')
        ];
        audios[motorIndex].play();
    }
});