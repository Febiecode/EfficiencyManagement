"use client"
import {
    useReactTable,
    getCoreRowModel,
    getPaginationRowModel,
    flexRender,
    getFilteredRowModel
} from '@tanstack/react-table'
import mData from './MOCK_DATA.json'
import { useMemo, useState } from 'react'
import UseWindowSize from '../../../Hooks/UseWindowSize'

const ProductivityTable = () => {
    const [filter, setFilter] = useState('');
    const [windowWidth, setWindowWidth] = UseWindowSize();;
    const data = useMemo(() => mData, []);

    

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
        getPaginationRowModel: getPaginationRowModel(),
        getFilteredRowModel: getFilteredRowModel(),
        state:{
            globalFilter: filter,
        },
        onGlobalFilterChange: setFilter,
    })
    // console.log(table.getCoreRowModel().rows)

    const filteredRows = table.getRowModel().rows.filter(row => {
        // Assuming each row is an object with keys corresponding to column values
        return Object.values(row.original).some(value =>
            value.toString().toLowerCase().includes(filter.toLowerCase())
        );
    });

    const inputStyle ={
        border: '2px solid grey',
        borderRadius: '5px',
        padding: '2px 10px',
        outline: 'none'
    }

    const label = {
        fontWeight: '500',
        fontSize: '20px',
        marginRight: '2px',
        marginBottom: '1px',
        textContent: 'left'
    }

    const innerWrapper = {
        display: 'flex',
        flexDirection: 'column',
        margin: '30px 20px',
        width: '20%', // 'width': '70%'
        justifyContent: 'center',
    }

    const resInnerWrapper = {
        display: 'flex',
        flexDirection: 'column',
        margin: '30px 20px',
        width: '70%', // 'width': '70%'
        justifyContent: 'center',
    }

    const outerWrapper = {
        display: 'flex',
        flexDirection: 'row', //'flex-direction': 'column',
        flexWrap: 'wrap',
        width: '80%',
        justifyContent: 'center',
        alignItems: 'center',
    }

    const resOuterWrapper = {
        display: 'flex',
        flexDirection: 'column', //'flex-direction': 'column',
        flexWrap: 'wrap',
        width: '80%',
        justifyContent: 'center',
        alignItems: 'center',
    }

    const outer = {
        display: 'flex',
        justifyContent: 'center',
    }

    return (
        <>

            <div style={outer}>

                <div style={windowWidth > 600 ? outerWrapper : resOuterWrapper} className='outerWrapper'>
                    <div style={windowWidth > 600 ? innerWrapper : resInnerWrapper}className='innerWrapper'>
                        <label for="lineNumber" style={label}>LineNumber</label>
                        <select id="lineNumber" name="lineNumber" style={inputStyle}  value={filter}
                            onChange={(e)=>setFilter(e.target.value)}>

                            <option value="">----Select----</option>
                            <option value="line1">Line 1</option>
                            <option value="line2">Line 2</option>
                            <option value="line3">Line 3</option>
                            <option value="line4">Line 4</option>
                            <option value="line5">Line 5</option>
                            <option value="line6">Line 6</option>

                        </select>
                    </div>
                    <div style={windowWidth > 600 ? innerWrapper : resInnerWrapper}>
                        <label for="operatorName" style={label}>Operator Name</label>
                        <select id="operatorName" name="operatorName" style={inputStyle} value={filter}
                            onChange={(e)=>setFilter(e.target.value)}>

                            <option value="">----Select----</option>
                            <option value="Wilmar Stanex">Wilmar Stanex</option>
                            <option value="Lurette Blasli">Lurette Blasli</option>
                            <option value="Ado Seppey">Ado Seppey</option>
                            <option value="Allen Binstead">Allen Binstead</option>
                            <option value="Clem Di Pietro">Clem Di Pietro</option>
                            <option value="Guillema Wegman">Guillema Wegman</option>

                        </select>
                    </div>
                    <div style={windowWidth > 600 ? innerWrapper : resInnerWrapper}>
                        <label for="reportDate" style={label}>Report Date</label>
                        <input type="date" id="reportDate" name="reportDate" style={inputStyle} />
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

                                filteredRows.map(row => (
                                    <tr class="item" key={row.id}>
                                        {row.getVisibleCells().map(cell => (
                                            <td key={cell.id}>
                                                {flexRender(cell.column.columnDef.cell, cell.getContext())}
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