import React, {useEffect, useState} from 'react';

import {
    Chart as ChartJS,
    RadialLinearScale,
    ArcElement,
    Tooltip,
    Legend,
} from 'chart.js';

import {PolarArea} from 'react-chartjs-2';

import "./polarAreaChart.scss"

ChartJS.register(RadialLinearScale, ArcElement, Tooltip, Legend);

/**
 * Create a Barchart using the Bar Charts Component,
 *
 */
const PolarAreaChart = () => {

    /**
     * State and Fetch Block
     */
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

            <div className="polararea">
                <button className="reloadButton" onClick={getData}>Reload</button>
                <h3 className="polarareaTitle">PolarArea Chart</h3>
                <PolarArea
                    data={{
                        labels: Object.keys(data),
                        datasets: [
                            {
                                label: "Sales",
                                data: Object.values(data),
                                backgroundColor: [
                                    'rgba(255, 99, 132, 0.2)',
                                    'rgba(54, 162, 235, 0.2)',
                                    'rgba(255, 206, 86, 0.2)',
                                    'rgba(75, 192, 192, 0.2)',
                                    'rgba(153, 102, 255, 0.2)',
                                    'rgba(255, 159, 64, 0.2)'
                                ],
                                borderColor: 'black',
                                borderWidth: 1,
                            },
                        ],
                    }}
                />
            </div>
    );
}

export default PolarAreaChart;
