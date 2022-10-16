import React, {useEffect, useState} from 'react';
import "./LineCharts.css";

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
 HEAD:ui/src/chartsComponents/LineCharts.js
        <div className='button'>
            <button onClick={getData}>Reload</button>
            <h1>Line Chart</h1>

        <div className="lineC">
            <button className="reloadButton" onClick={getData}>Reload</button>
            <h3 className="lineTitle">Line Chart</h3>
 db99267264e81d68a8e70994651fa72890bedb3c:ui/src/appComponents/chartComponents/LineCharts.jsx
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
                            showLine: true,
<<<<<<< HEAD:ui/src/chartsComponents/LineCharts.js
                            


                            height: 657.6
 db99267264e81d68a8e70994651fa72890bedb3c:ui/src/appComponents/chartComponents/LineCharts.jsx
                        },
                    ],
                }}
            />
        </div>
    )

};

export default LineCharts;