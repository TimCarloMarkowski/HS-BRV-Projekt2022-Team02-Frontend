import './App.css';

import React, {useCallback, useState, useEffect, useMemo} from 'react'; 

import {AgGridReact} from 'ag-grid-react';  //AG-Grid Library                      

              
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';
import 'ag-grid-enterprise';


/*
Das import Statement wird verwendet um Funktionen, 
Objekte und Primitives zu importieren die von einem externen Modul, 
einem anderen Script, etc. exportiert wurden.
*/



function App() {
  
  var chartPanelTemplate =
  '<div class="chart-wrapper ag-theme-alpine">' +
  '<div class="chart-wrapper-top">' +
  '<span class="chart-wrapper-title"></span>' +
  '<button class="chart-wrapper-close">Close Chart</button>' +
  '</div>' +
  '<div class="chart-wrapper-body"></div>' +
  '</div>';
  
  const containerStyle = useMemo(() => ({ width: '100%', height: '100%' }), []);
  const gridStyle = useMemo(() => ({ height: '300px', width: '100%' }), []);
  
  const [rowData, setRowData] = useState([]);

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


  const popupParent = useMemo(() => {
    return document.body;
  }, []);

  const createChartContainer = useCallback(
    (chartRef) => {
      var eChart = chartRef.chartElement;
      var eTemp = document.createElement('div');
      eTemp.innerHTML = chartPanelTemplate;
      var eChartWrapper = eTemp.firstChild;
      var eParent = document.querySelector('#container');
      eParent.appendChild(eChartWrapper);
      eChartWrapper.querySelector('.chart-wrapper-body').appendChild(eChart);
      eChartWrapper.querySelector('.chart-wrapper-title').innerText =
        'Chart Created At ' + new Date();
      eChartWrapper
        .querySelector('.chart-wrapper-close')
        .addEventListener('click', function () {
          chartRef.destroyChart();
          eParent.removeChild(eChartWrapper);
        });
    },
    [chartPanelTemplate]
  );

  return (
    
    <div style={containerStyle}>
      <div id="container">
        <div style={gridStyle} className="ag-theme-alpine">
      <AgGridReact //Component Properties
          enableCharts={true}
          rowData={rowData}
          columnDefs={columnDefs}
          defaultColDef={defaultColDef}
          enableRangeSelection={true}
          popupParent={popupParent}
          createChartContainer={createChartContainer}
          ></AgGridReact>
    </div>
  </div>
  </div>
  );

}

export default App;
