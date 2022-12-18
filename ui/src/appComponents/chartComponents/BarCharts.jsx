import "./barChart.scss"
import {BarElement, CategoryScale, Chart as ChartJS, Legend, LinearScale, Title, Tooltip,} from 'chart.js';

import {Bar} from 'react-chartjs-2';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

/**
 * Create a Barchart using the Bar Charts Component,
 *
 */
const BarCharts = ({x_values, y_values}) => {

    return (

        <div className="barC">
            <Bar
                data={{
                    labels: x_values,//Object.keys(data),
                    datasets: [
                        {
                            label: "SalesData",
                            data: y_values, //Object.values(data),
                            backgroundColor: [
                                'rgba(255, 99, 132, 0.2)',
                                'rgba(54, 162, 235, 0.2)',
                                'rgba(255, 206, 86, 0.2)',
                                'rgba(75, 192, 192, 0.2)',
                                'rgba(153, 102, 255, 0.2)',
                                'rgba(255, 159, 64, 0.2)'
                            ],
                            borderColor: 'black',
                            borderWidth: 2,
                        },
                    ],
                }}
                height={300}
                width={700}
            />
        </div>
    );
}
export default BarCharts;