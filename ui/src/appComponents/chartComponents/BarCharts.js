import React, {useEffect, useState} from 'react';

import "./barChart.scss"
//import daten from "./../sale.json";
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
const BarCharts = () => {

    /**
     * State and Fetch Block
     */
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

    /* test function 
    // returns array of unique values matching accessor
    const extractIdUndSales = (jsondata, id, sales) => {

        // push only keys matching accessor into new array
        jsondata.forEach((d) => {
        id.push(d.id);
        sales.push(d.salesPrice);
        });
    
    }

    //extractIdUndSales(data, id, sales)
    */

    return (

        <div className="barC">
            <button className="reloadButton" onClick={getData}>Reload</button>
            <Bar
                data={{
                    labels: id,//Object.keys(data),
                    datasets: [
                        {
                            label: "Sales",
                            data: sales, //Object.values(data),
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