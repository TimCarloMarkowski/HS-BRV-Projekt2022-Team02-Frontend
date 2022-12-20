import React from 'react';
import "./App.scss";
import TableProducts from './appComponents/tableComponents/TableProducs';
import TableSales from './appComponents/tableComponents/TableSales';
import ChartsController from "./appComponents/chartComponents/ChartsController";
import BarCharts from './appComponents/chartComponents/BarCharts';

const App = () => {
    return (
        <div>
            <div>
            <h1 id="top">Bachelorprojekt Hochschule Bremerhaven</h1>
            </div>
            <div className='diagram'>
                <div className='chart1'>
                    <ChartsController/>
                </div>
                <div className='chart1'>
                    <BarCharts/>
                </div>
            </div>
            <div id = "tableProducts">
                <TableProducts/>
            </div>
            <div id = "table">
                <TableSales/>
            </div>
        </div>
    )
}

export default App;