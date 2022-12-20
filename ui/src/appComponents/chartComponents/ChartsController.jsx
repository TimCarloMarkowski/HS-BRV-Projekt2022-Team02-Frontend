import React, {useEffect, useState} from 'react';

import "./buttonComponent.scss";

import BarCharts from "./BarCharts";
import DoughnutCharts from "./DoughnutCharts";
import LineCharts from "./LineCharts";

const ChartsController = () => {
    /**
     * State and Fetch Block
     */

    const productKeys = ["id", "internalPrice", "salesPrice"]
    const [data, setData] = useState([]);
    const [x_param, setX_param] = useState("revenue");
    const [y_param, setY_param] = useState("customer");
    const [x_values, setX_values] = useState([]);
    const [y_values, setY_values] = useState([]);
    const [chart, setChart] = useState("BarChart");

    const [barContentVisible, setBarContentVisible] = useState(true);
    const [doughnutContentVisible, setDoughnutContentVisible] = useState(false);
    const [lineContentVisible, setLineContentVisible] = useState(false);

    useEffect(() => {
        chart === "BarChart" ? setBarContentVisible(true) : setBarContentVisible(false);
        chart === "DoughnutChart" ? setDoughnutContentVisible(true) : setDoughnutContentVisible(false);
        chart === "LineChart" ? setLineContentVisible(true) : setLineContentVisible(false);
    }, [chart]);

    const handleOnChange = (e) => {
        setChart(e.target.value);
    };

    const handleOnChangeX = (e) => {
        setX_param(e.target.value);
    };

    const handleOnChangeY = (e) => {
        setY_param(e.target.value);
    };

    async function getData() {
        const url = "http://localhost:1339/sales?page=0&size=30";
        const res = await fetch(url).then( result => result.json()).then(i => i.content)
        await setData(res);
        console.log("job done");
        const id_value=[]
        const sales_value=[]
        res.forEach((d) => {
            id_value.push(d[x_param]);
            sales_value.push(d[y_param]);
        })
        setX_values(id_value)
        setY_values(sales_value)

    }
    useEffect(() => {
        if (data.length === 0) {
            getData()
        }
    })

    async function updateX(){
        const tempXs = [];
        await data.forEach((d) => {
            let value = productKeys.includes(x_param) ? d["product"][x_param] : d[x_param];
            value ? tempXs.push(value) : tempXs.push(0);
        });
        await setX_values(tempXs)
        console.log(x_values)
    }

    async function updateY(){
        const tempYs = [];
        await data.forEach((d) => {
            let value = productKeys.includes(y_param) ? d["product"][y_param] : d[y_param];
            value ? tempYs.push(value) : tempYs.push(0);
        });
        await setY_values(tempYs)
        console.log(y_values)
    }

    useEffect( () => {
        updateX()
    }, [x_param]);

    useEffect( () => {
        updateY()
    }, [y_param]);

    return (
        <div>
            <div className='selectmenu'>
            <div className='buttonSpace'>
                <select value={chart} onChange={handleOnChange}>
                    <option value="selectCharts">Select your chart</option>
                    <option selected={true} value="BarChart">BarChart</option>
                    <option value="DoughnutChart">DoughnutChart</option>
                    <option value="LineChart">LineChart</option>
                </select>
            </div>
            
            <div className='buttonSpace'>
                <select value={x_param} onChange={handleOnChangeX}>
                    <option selected={true} value="revenue">Revenue</option>
                    <option value="customer">Customer</option>
                    <option value="orderNumber">OrderNumber</option>
                    <option value="orderItem">OrderItem</option>
                    <option value="salesQuantity">SalesQuantity</option>
                    <option value="internalPrice">InternalPrice</option>
                    <option value="salesPrice">SalesPrice</option>
                    <option value="year">Year</option>
                    <option value="ident">Ident</option>
                    <option value="month">Month</option>
                    <option value="day">Day</option>
                </select>
                <select className='buttonSpace' value={y_param} onChange={handleOnChangeY}>
                    <option selected={true} value="customer">Customer</option>
                    <option value="revenue">Revenue</option>
                    <option value="year">Year</option>
                    <option value="ident">Ident</option>
                    <option value="orderNumber">OrderNumber</option>
                    <option value="orderItem">OrderItem</option>
                    <option value="salesQuantity">SalesQuantity</option>
                    <option value="internalPrice">InternalPrice</option>
                    <option value="salesPrice">SalesPrice</option>
                    <option value="month">Month</option>
                    <option value="day">Day</option>
                </select>
            </div>
            </div>
            {barContentVisible && <BarCharts x_values={x_values} y_values={y_values}/>}
            {doughnutContentVisible && <DoughnutCharts x_values={x_values} y_values={y_values}/>}
            {lineContentVisible && <LineCharts x_values={x_values} y_values={y_values}/>}

        </div>
    );
}
export default ChartsController;