import "./lineChart.scss"

import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    Filler
} from 'chart.js';

import {Line} from 'react-chartjs-2';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    Filler
);

const LineCharts = ({x_values, y_values}) => {

    return (
        <div className="lineC">
            <h3 className="lineTitle">Line Chart</h3>
            <Line
                data={{
                    labels: x_values, //Object.keys(data),
                    datasets: [
                        {
                            label: "SalesData",
                            data: y_values, //Object.values(data),
                            backgroundColor: [
                                'rgba(255, 206, 86, 2)',
                                'rgba(75, 192, 192, 2)',
                                'rgba(153, 102, 255, 2)',
                                'rgba(255, 159, 200, 2)'
                            ],
                            borderColor: "red",
                            borderWidth: 2,
                            tension: 0.4,
                            fill: true,
                            pointStyle: 'rect',
                            pointBorderColor: 'blue',
                            pointBackgroundColor: '#fff',
                            showLine: true,
                            height: 657.6
                        },
                    ],
                }}
            />
        </div>
    );

}

export default LineCharts; 