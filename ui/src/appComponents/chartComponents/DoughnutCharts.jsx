import "./doughnutChart.scss"

import {
    Chart as ChartJS,
    ArcElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';

import {Doughnut} from 'react-chartjs-2';

ChartJS.register(
    ArcElement,
    Title,
    Tooltip,
    Legend
);


const DoughnutCharts = ({x_values, y_values}) => {

    return (

        <div className="doughnutC">
            <h3 className="doughnutTitle">Doughnut Chart</h3>
            <Doughnut
                data={{
                    labels: x_values, // Object.keys(data),
                    datasets: [
                        {
                            label: "SalesData",
                            data: y_values, //Object.values(data),
                            backgroundColor: [
                                'rgba(75, 192, 192)',
                                'rgba(153, 102, 255)',
                                'rgba(255, 159, 200)',
                                'rgba(255, 206, 86)',
                                'rgb(255, 99, 132)',
                                'rgb(54, 162, 235)',
                                'rgb(255, 205, 86)'
                            ],
                            borderWidth: 10,
                        },
                    ],
                }}
            />
        </div>
    );
}

export default DoughnutCharts; 