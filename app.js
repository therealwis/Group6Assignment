const express = require('express');
const Chart = require('chart.js');

const server = express();

server.set('view engine', 'ejs');
server.use(express.static('public'));
server.use(express.static(__dirname + '/node_modules/chart.js/dist'));

server.get("/", (req, resp) => {
    resp.render("index");
});

server.get('/reports', (req, res) => {
    // data for the bar chart
    var data = {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [{
            label: 'Sales',
            backgroundColor: 'rgb(54, 162, 235)',
            borderColor: 'rgb(54, 162, 235)',
            data: [65, 59, 80, 81, 56, 55, 40]
        }]
    };

    var options = {
        responsive: true,
        title: {
            display: true,
            text: 'Monthly Sales Chart'
        },
        scales: {
            y: {
                beginAtZero: true
            }
        }
    };

    // Data for the Line chart
    var lineChartData = {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [{
            label: 'Website Visits',
            borderColor: 'rgb(75, 192, 192)',
            data: [100, 200, 100, 400, 50, 300, 700]
        }]
    };

    var lineChartOptions = {
        responsive: true,
        title: {
            display: true,
            text: 'Monthly Website Visits'
        },
        scales: {
            y: {
                beginAtZero: true
            }
        }
    };

    // Data and options for the pie chart
    var pieChartData = {
        labels: ['Stocks', 'Bonds', 'Savings', 'Real Estate', 'Cash'],
        datasets: [{
            backgroundColor: ['#FF5733', '#FFC300', '#36A2EB', '#4CAF50', '#FF6384'],
            data: [30, 20, 15, 25, 10]
        }]
    };
    
    var pieChartOptions = {
        responsive: true,
        title: {
            display: true,
            text: 'Asset Allocation'
        }
    };

    res.render('reports', {
        barChartData: data,
        barChartOptions: options,
        lineChartData: lineChartData,
        lineChartOptions: lineChartOptions,
        pieChartData: pieChartData,
        pieChartOptions: pieChartOptions
    });

});

server.listen(3000, () => {
    console.log("Server started");
});
