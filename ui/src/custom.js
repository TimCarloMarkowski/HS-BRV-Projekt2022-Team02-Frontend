var xmlhttp = new XMLHttpRequest();
        
var url = "C:\Users\doaaa\Desktop\Projekt\HS-BRV-Projekt2022-Team02-Frontend\Salesdata.json";
xmlhttp.open("GET", url,true);
xmlhttp.send();
xmlhttp.onreadystatechange = function(){
    if(this.readyState == 4 && this.status == 200){
        var YEAR = JSON.parse(this.responseText);
        console.log(data)
        /*YEAR = YEAR.YEAR.map(function(elem){
            return elem.YEAR;
        
        }) 
        */console.log(YEAR)
    }
}


const ctx = document.getElementById('canvas').getContext('2d');
const myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['YEAR', 'MONTH', 'DAY', 'Customer', 'OrderNumber', 'OrderItem', 'Product', 'SalesQuantity', 'UnitOfMeasure', 'Revenue', 'Currency', 'Discount'],
        datasets: [{
            label: '# of Votes',
            data: [12, 19, 3, 5, 2, 3, 12, 14, 5, 6, 15, 45],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
        
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});