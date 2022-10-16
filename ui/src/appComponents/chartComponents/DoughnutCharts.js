import React, {useEffect, useState} from 'react';

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


const DoughnutCharts = () => {

    const [data, setData] = useState({})

    const getData = async () => {
        const url = "http://localhost:3003/data/revenuePerYear.json";
        const res = await fetch(url)
        const datapoints = await res.json()
        setData(datapoints)
    }
    useEffect(() => {
        if (data === {}) {
            getData()
        }
    })

    return (

        <div className="doughnutC">
            <button className="reloadButton" onClick={getData}>Reload</button>
            <h3 className="doughnutTitle">Doughnut Chart</h3>
            <Doughnut
                data={{
                    labels: Object.keys(data),
                    datasets: [
                        {
                            label: "Sales",
                            data: Object.values(data),
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