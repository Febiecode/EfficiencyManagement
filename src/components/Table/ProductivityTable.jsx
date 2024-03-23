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

            <div class="flex justify-center">

                <div class="w-[80%] flex flex-wrap justify-left">
                    <div class="flex flex-col m-5 w-full lg:w-[25%]">
                        <label for="lineNumber" class="font-bold text-lg mr-2 mb-3 text-left">LineNumber</label>
                        <select id="lineNumber" name="lineNumber" class="border-2 border-gray-300 rounded px-2 py-1 focus:outline-none">

                            <option value="">----Select----</option>
                            <option value="line1">Line 1</option>
                            <option value="line2">Line 2</option>
                            <option value="line3">Line 3</option>

                        </select>
                    </div>
                    <div class="flex flex-col m-5 w-full lg:w-[25%]">
                        <label for="operatorName" class="font-bold text-lg mr-2 mb-3 text-left">Operator Name</label>
                        <select id="operatorName" name="operatorName" class="border-2 border-gray-300 rounded px-2 py-1 focus:outline-none">

                            <option value="">----Select----</option>
                            <option value="operator1">Operator 1</option>
                            <option value="operator2">Operator 2</option>
                            <option value="operator3">Operator 3</option>

                        </select>
                    </div>
                    <div class="flex flex-col m-5 w-full lg:w-[25%]">
                        <label for="reportDate" class="font-bold text-lg mr-2 mb-3 text-left">Report Date</label>
                        <input type="date" id="reportDate" name="reportDate" class="border-2 border-gray-300 rounded px-2 py-1 focus:outline-none" />
                    </div>

                </div>

            </div>

            <div className='flex justify-center'>
                <div className='overflow-x-auto'>
                    <table classname="table-auto">
                        <thead>
                            {
                                table.getHeaderGroups().map(headerGroup => (
                                    <tr class="item" key={headerGroup.id}>
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
                                    <tr class="item" key={row.id}>
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
            </div>
            <div className='flex justify-center'>
                <button onClick={() => table.setPageIndex(0)}>1</button>
                <button disabled={!table.getCanPreviousPage()} onClick={() => table.previousPage()}>Prev</button>
                <button disabled={!table.getCanNextPage()} onClick={() => table.nextPage()}>Next</button>
                <button onClick={() => table.setPageIndex(table.getPageCount() - 1)}>{table.getPageCount()}</button>
            </div>


            <style jsx>{`
                /* CSS for table */
                button{
                    margin: 20px 5px;
                    padding:5px 20px;
                    background-color: #ddd;
                    font-size:16px;
                    border-radius: 5px;
                    font-weight: 500;
                }
                button:hover{
                    background-color:#E15465;
                    color: #fff;
                    font-size:16px;
                    border-radius: 5px;
                    font-weight: 500;
                }
                
                /* CSS for table header */
                th {
                  background-color: #E15465; /* Header background color */
                  color: white; /* Header text color */
                  padding: 8px;
                  text-align: center;
                  position: sticky;
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