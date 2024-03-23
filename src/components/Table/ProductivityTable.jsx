"use client"
import {
    useReactTable,
    getCoreRowModel,
    getPaginationRowModel,
    flexRender
} from '@tanstack/react-table'
import mData from '../MOCK_DATA.json'
import { useMemo } from 'react'

const ProductivityTable = () => {
    /* {
        "LineNumber": 42,
        "EmployeeID": "96-3617188",
        "OperatorName": "Corabel Alvares",
        "MCID": "47-2791155",
        "MachineName": "Chevrolet",
        "Operation": "Electrical Engineer",
        "TargetOutput": 178,
        "ActualOutput": 163,
        "MachineDowntime": 10,
        "Productivity": 58.58
    }*/

    const data = useMemo(() => mData, [])

    const columns = [
        {
            header: 'Line Number',
            accessorKey: 'LineNumber',
            footer: 'Line Number'
        },
        {
            header: 'Employee ID',
            accessorKey: 'EmployeeID',
            footer: 'Employee ID'
        },
        {
            header: 'Operator Name',
            accessorKey: 'OperatorName',
            footer: 'Operator Name'
        },
        {
            header: 'M/C ID',
            accessorKey: 'MCID',
            footer: 'M/C ID'
        },
        {
            header: 'Machine Name',
            accessorKey: 'MachineName',
            footer: 'Machine Name'
        },
        {
            header: 'Operation',
            accessorKey: 'Operation',
            footer: ''
        },
        {
            header: 'Target Output',
            accessorKey: 'TargetOutput',
            footer: 'Operation'
        },
        {
            header: 'Actual Output',
            accessorKey: 'ActualOutput',
            footer: 'Actual Output'
        },
        {
            header: 'Machine Downtime',
            accessorKey: 'MachineDowntime',
            footer: 'Machine Downtime'
        },
        // {
        //     header: 'Productivity',
        //     accessorKey: 'Productivity',
        //     footer: 'Productivity'
        // },
        {
            header: 'Productivity',
            accessorKey: 'Productivity',
            footer: 'Productivity',
            accessorFn: row => `${row.Productivity} %`,
        }
    ]

    const table = useReactTable({
        data,
        columns,
        getCoreRowModel: getCoreRowModel(),
        getPaginationRowModel: getPaginationRowModel()
    })
    // console.log(table.getCoreRowModel().rows)
    return (
        <>
            <div className="entireTable">
                <div class="table">
                    <table>
                        <thead>
                            {
                                table.getHeaderGroups().map(headerGroup => (
                                    <tr key={headerGroup.id}>
                                        {headerGroup.headers.map(header => (
                                            <th key={header.id}>
                                                {header.isPlaceholder ? null : flexRender(
                                                    header.column.columnDef.header,
                                                    header.getContext()
                                                )}
                                            </th>
                                        ))}
                                    </tr>
                                ))}
                        </thead>

                        <tbody>
                            {
                                table.getRowModel().rows.map(row => (
                                    <tr key={row.id}>
                                        {row.getVisibleCells().map(cell => (
                                            <td key={cell.id}>
                                                {
                                                    flexRender(cell.column.columnDef.cell, cell.getContext())
                                                }
                                            </td>
                                        ))}
                                    </tr>
                                ))
                            }
                        </tbody>
                        <tfoot>

                        </tfoot>

                    </table>
                </div>
                <div class="pagination">
                    <button onClick={() => table.setPageIndex(0)}>1</button>
                    <button disabled={!table.getCanPreviousPage()} onClick={() => table.previousPage()}>Prev</button>
                    <button disabled={!table.getCanNextPage()} onClick={() => table.nextPage()}>Next</button>
                    <button onClick={() => table.setPageIndex(table.getPageCount() - 1)}>{table.getPageCount()}</button>
                </div>
            </div>

            <style jsx>{`
                /* CSS for table */
                
                .entireTable{
                    display:flex;
                    flex-direction:column;
                    align-items:center;
                    overflow-x:auto;
                    max-width:100%;
                }
                button{
                    margin: 20px 10px;
                    padding:10px 20px;
                    border: 1px solid #E15465;
                    font-size:20px;
                }
                button:hover{
                    background-color:#E15465;
                    color: #fff;
                    font-size:20px;
                }
                
                
                /* CSS for table header */
                th {
                  background-color: #E15465; /* Header background color */
                  color: white; /* Header text color */
                  padding: 8px;
                  text-align: center;
                }
                
                /* CSS for table rows */
                // tr:nth-child(even) {
                //   background-color: #f2f2f2;
                // }
                
                /* CSS for table cell */
                td {
                  padding: 8px;
                  text-align: center;
                  border: 2px solid #ddd;
                }
                
            `}</style>
        </>
    )
}
export default ProductivityTable;