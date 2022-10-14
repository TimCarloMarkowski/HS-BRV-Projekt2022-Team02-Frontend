import React, { useState, useEffect } from 'react';
import {DataGrid} from "@mui/x-data-grid";

const columns = [
    { field: 'id', headerName: 'user_ID' },
    { field: 'name', headerName: 'Name'},
    { field: 'username', headerName: 'Username'},
    { field: 'phone', headerName: 'Phone', width:150 },
    { field: 'website', headerName: 'Webseite', width:150},
    { field: 'email', headerName: 'User_Email', width:150},
]

const DataTable = () => {

    const [tableData, setTableData] = useState([])

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then((data) => data.json())
            .then((json) => setTableData(json))

    }, [])


    return (
        <div style={{ height: 400, width: '100%' }}>
            <DataGrid
                rows={tableData}
                columns={columns}
                loading={!tableData.length}
            />
        </div>
    )
}

export default DataTable;