var bar = document.getElementById("chartBar").getContext('2d');
var chartBar = new Chart(bar, {    
    type: 'bar',
    data: {
        barPercentage: 100,
        labels: ['2559', '2560', '2561', '2562', '2563'],
        datasets: [ {
        label:'เพศหญิง',
        data:[61.6, 59.9, 60.5, 58.7, 60.2],
        backgroundColor:'#ed3f33',
        }, {
        label:'เพศชาย',
        data:[77.9, 77.0, 77.6, 76.0, 76.6],
        backgroundColor:'#183965'
        } ]
    },

    option: {
        responsive: true,
    },
    options: {
        plugins: {
            legend: {
                display: false
            }
        }
    }
})

chartBar.canvas.parentNode.style.height = '50vh'; 
chartBar.canvas.parentNode.style.width = '90vw';