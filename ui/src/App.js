import React from 'react';
import "./App.scss";
import TableProducts from './appComponents/tableComponents/TableProducs';
import TableSales from './appComponents/tableComponents/TableSales';
import BarCharts from './appComponents/chartComponents/BarCharts';
import Button from "./appComponents/chartComponents/ButtonsComponent"; 

const App = () => {
    return (
        <div>
         <div className="homecontainer">
         <h1 id="top">Bachelorprojekt Hochschule Bremerhaven</h1>
            </div>
            <div className='charts'>
                <Button/>
                <BarCharts/>
            </div>
            <div id = "table">
                <TableProducts/>
            </div>
            <div className="chartBottom">
                <TableSales/>
            </div>
        </div>
    )
}

export default App;