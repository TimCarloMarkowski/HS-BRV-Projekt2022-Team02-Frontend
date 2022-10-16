import BarCharts from './chartsComponents/BarCharts.js'; 
import DoughnutCharts from './chartsComponents/DoughnutCharts.js'; 
import LineCharts from './chartsComponents/LineCharts.js'; 
import React, { useEffect, useState } from 'react';

const Button = () => {
  const [chart, setChart] = useState("selectCharts");

  const [barContentVisible, setBarContentVisible] = useState(false);
  const [doughnutContentVisible, setDoughnutContentVisible] = useState(false);
  const [lineContentVisible, setLineContentVisible] = useState(false);

  useEffect(() => {
    chart === "Bar" ? setBarContentVisible(true) : setBarContentVisible(false);
    chart === "Doughnut" ? setDoughnutContentVisible(true) : setDoughnutContentVisible(false);
    chart === "Line" ? setLineContentVisible(true) : setLineContentVisible(false);
  }, [chart]);

  const handleOnChange = (e) => {
    setChart(e.target.value);
  };

  const makeFirstLetterCapital = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };

  const renderResult = () => {
    let result;
    chart === "selectCharts" ? (result = "select your chart") : (result = makeFirstLetterCapital(chart));
    return result;
  };

  return (
    <div>
      <div>
        <h1>Hello {renderResult()}</h1>
      </div>
      <div>
       
      <select name="produkte">
  <option value="produktx" label="Produkt X">Produktname X, Modell Y, Version X.Y</option>
  <option value="produkta" label="Produkt A">Produktname A, Modell B, Version A.B</option>
</select>
 
      </div>
      {barContentVisible && <BarCharts />}
      {doughnutContentVisible && <DoughnutCharts />}
      {lineContentVisible && <LineCharts />}
    </div>
  );
} 
export default Button;