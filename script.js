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
                }
            }
        });
});