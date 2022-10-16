import React, {useEffect, useState} from "react";

import {COLUMNS} from "./NewColums";
import "./newTC.css";
import {useTable} from "react-table/src";


const NewTable = () => {
    /**
     * State and Fetch Block
     */
    const [tData, setData] = useState({})

    const getData = async () => {
        const url = "http://localhost:3003/data/revenuePerYear.json";
        const res = await fetch(url)
        // wait until the Request has been completed
        const datapoints = await res.json()
        setData(datapoints)
    }
    useEffect(() => {
        if (tData === {}) {
            getData()
        }
    })

    const tableInstance = useTable({
        column: COLUMNS,
        data: tData,
        })

    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow,
    } = tableInstance

    return (
        <table {...getTableProps()}>
            <thead>
            {
                headerGroups.map((headerGroup) => (
                    <tr {...headerGroup.getHeaderGroupProps()}>
                        {headerGroup.headers.map((column) =>(
                            <th {...column.getHeaderProps()}>
                                {column.render('Header')}
                            </th>
                        ))}
                    </tr>
                ))}

            </thead>
            <tbody {...getTableBodyProps()}>
            {
                rows.map(row => {
                    prepareRow(row)
                    return (
                        <tr { ...row.getRowProps()}>
                            {row.cells.map((cell) => {
                                return (
                                    <td {...cell.getCellProps()}>
                                        {cell.render('Cell')}
                                    </td>
                                )
                            })}
                        </tr>
                    )
                })
            }
            </tbody>
        </table>
    )

}
export default NewTable;


