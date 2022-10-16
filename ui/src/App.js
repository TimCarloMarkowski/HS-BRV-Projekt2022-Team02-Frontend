import React from 'react';
import './App.css';
import './index.css';
import Button from './button.js';

import TableSales from "./chartsComponents/TableSales";

const App = () => {
    return (
        <div>
            <Button/>
            <TableSales/>
        </div>
    )
}

export default App;
