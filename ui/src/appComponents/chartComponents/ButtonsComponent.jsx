import React, {useEffect, useState} from 'react';

import "./buttonComponent.scss";

import BarCharts from "./BarCharts";
import LineCharts from "./LineCharts";
import DoughnutCharts from "./DoughnutCharts";


const Button = () => {
    const [chart, setChart] = useState("selectCharts");

    const [barContentVisible, setBarContentVisible] = useState(false);
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

    return (
        <div className="buttonComp">
            <div>
                <select value={chart} onChange={handleOnChange}>
                    <option value="selectCharts">Select your chart</option>
                    <option value="BarChart">BarCharts</option>
                    <option value="DoughnutChart">DoughnutCharts</option>
                    <option value="LineChart">LineCharts</option>

                </select>
            </div>
            {barContentVisible && <BarCharts/>}
            {doughnutContentVisible && <DoughnutCharts/>}
            {lineContentVisible && <LineCharts/>}
        </div>
    );
}
export default Button;