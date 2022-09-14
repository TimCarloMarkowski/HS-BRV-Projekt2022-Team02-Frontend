import React, {useEffect, useState} from 'react';

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

const LineCharts = () => {

    const [data, setData] = useState({})

    const getData = async () => {
        const url = "http://localhost:3003/data/revenuePerYear.json";
        const res = await fetch(url)
        // wait until the Request has been completed
        const datapoints = await res.json()
        setData(datapoints)
    }
    useEffect(() => {
        if (data === {}) {
            getData()
        }
    })

    return (
        <div>
            <button onClick={getData}>Reload</button>
            <h1>Line Chart</h1>
            <Line
                data={{
                    labels: Object.keys(data),
                    datasets: [
                        {
                            label: "Sales",
                            data: Object.values(data),
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
                            showLine: true

                        },
                    ],
                }}
                height={300}
                width={700}

            />
        </div>
    );

}

export default LineCharts;