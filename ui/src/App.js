import React from 'react';
import './App.css';
import './index.css';

import BarCharts from './chartsComponents/BarCharts.js';
import LineCharts from "./chartsComponents/LineCharts";
import DoughnutCharts from "./chartsComponents/DoughnutCharts";
import TableSales from "./chartsComponents/TableSales";

const App = () => {
    return (
        <div>
            <BarCharts/>
            <LineCharts/>
            <DoughnutCharts/>
            <TableSales/>
        </div>
    )
}

export default App;
