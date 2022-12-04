import React, {useEffect, useState} from 'react';

import "./LineChart.scss"

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
    const [id, setId] = useState([])
    const [sales, setSales] = useState([])
    const getData = async () => {
        const url = "http://localhost:3003/data/testSalesData.json";
        const res = await fetch(url)
        // wait until the Request has been completed
        const datapoints = await res.json()
        const id_value=[]
        const sales_value=[]
        datapoints.forEach((d) => {
            id_value.push(d.id);
            sales_value.push(d.salesPrice);
        });
        setId(id_value)
        setSales(sales_value)
        setData(datapoints)
    }
    useEffect(() => {
        if (data === {}) {
            getData()
        }
    })

    return (
        <div className="lineC">
            <button className="reloadButton" onClick={getData}>Reload</button>
            <h3 className="lineTitle">Line Chart</h3>
            <Line
                data={{
                    labels: id, //Object.keys(data),
                    datasets: [
                        {
                            label: "Sales",
                            data: sales, //Object.values(data),
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