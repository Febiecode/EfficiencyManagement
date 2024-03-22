"use client"
import { useReactTable, getCoreRowModel, flexRender } from '@tanstack/react-table'
import mData from '../components/MOCK_DATA.json'
import { useMemo } from 'react'
import uuid from 'uuidv4';

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
            header: 'EmployeeID',
            accessorKey: 'Employee ID',
            footer: 'EmployeeID'
        },
        {
            header: 'Operation Name',
            accessorKey: 'OperationName',
            footer: 'Operation Name'
        },
        {
            header: 'M/C ID',
            accessorKey: 'MCID',
            footer: 'M/C ID'
        },
        {
            header: 'Machine Name',
            accessorKey: 'Machine Name',
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
        {
            header: 'Productivity',
            accessorKey: 'Productivity',
            footer: 'Productivity'
        },
    ]

    const table = useReactTable({ data, columns })
    return (
        <>
            <div>
                <table>
                    <thead>
                    {
                        table.getHeaderGroups().map(headerGroup => (
                            <tr key={headerGroup.id}>
                                {headerGroup.headers.map(header => (
                                    <th key={header.id}>
                                        {flexRender(
                                            header.column.columnDef.header,
                                            header.getContext()
                                        )}
                                    </th>
                                ))}
                            </tr>
                        ))}
                    </thead>
                    
                    <tbody>
                    
                    </tbody>
                    <tfoot>
                        <tr>
                            <td>
                                Line
                            </td>
                        </tr>
                    </tfoot>
                </table>
            </div>
        </>
    )
}

export default ProductivityTable;