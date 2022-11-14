import React from 'react';
import { useContext } from "react";

import "./App.scss"
import {DarkModeContext} from "./appComponents/context/darkModeContext";
//import Home from "./appComponents/home/Home";
import TableProducts from './appComponents/tableComponents/TableProducs';
import TableSales from './appComponents/tableComponents/TableSales';

const App = () => {
    const {darkMode} = useContext(DarkModeContext);
    return (
        <div className={darkMode ? "app dark" : "app"}>
            <div>
                <TableProducts/>
            </div>
            <div>
                <TableSales/>
            </div>
        </div>
    )
}

export default App;