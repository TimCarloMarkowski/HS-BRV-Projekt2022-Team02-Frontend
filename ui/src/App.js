import './App.css';

import {AgGridReact} from 'ag-grid-react';

import {useState, useEffect, useMemo} from 'react';

import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';

function App() {
  
  const [rowData, setRowData] = useState([

  ]);

  const [columnDefs] = useState([
    {field: 'YEAR'},
    {field: 'MONTH'},
    {field: 'DAY'},
    {field: 'Customer'},
    {field: 'OrderNumber'},
    {field: 'OrderItem'},
    {field: 'Product'},
    {field: 'SalesQuantity'},
    {field: 'UnitOfMeasure'},
    {field: 'Revenue'},
    {field: 'Currency'},
    {field: 'Discount'}
  ]);
  
  const defaultColDef = useMemo( ()=> ({
    sortable: true,
    filter: true
  }), []);
  
  useEffect(() => {
    fetch('SalesData.json')
    .then(result => result.json())
    .then(rowData => setRowData(rowData))
  }, []);
  
  return (
    <div className='ag-theme-alpine'
         style={{height: 400}}>
      <AgGridReact
          rowData={rowData}
          columnDefs={columnDefs}
          rowSelection='multiple'
          animateRows={true}
          defaultColDef={defaultColDef}/>
    </div>
  );
}

export default App;
