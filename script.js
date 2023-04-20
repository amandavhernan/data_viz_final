// line chart
var ctx = document.getElementById('lineChart').getContext('2d');
var lineChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['2004','2006','2008','2009','2012','2013','2014','2015','2016','2017','2018','2019','2020','2021','2022'],
        datasets: [{ 
            label: "Number of PFAS sites found",
            data: [1,2,1,2,1,2,10,15,64,141,520,476,214,30,4],
            backgroundColor: ['rgba(79, 132, 163, 0.2)'],
            borderColor: ['rgb(79, 132, 163)'],
            borderWidth: 2,
        },
    ]
    },
    options: {
        responsive: true,
        plugins: {
            title: {
                display: true,
                text: 'Headline',
                font: {
                    size: 18
                }
            },
            subtitle: {
                display: true,
                text: 'Chatter'
            }
        },
        scales: {
            y: {
                beginAtZero: true,
                title: {
                    display: true,
                    text: 'Y-axis Label'
                }
            }
        },
    },
});