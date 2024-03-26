"use client"
import {
    useReactTable,
    getCoreRowModel,
    getPaginationRowModel,
    flexRender,
    getFilteredRowModel
} from '@tanstack/react-table'

import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "../../../components/ui/table"


import mData from './MOCK_DATA.json'
import { useMemo, useState } from 'react'

import UseWindowSize from '../../../Hooks/UseWindowSize'


const RecentTable = () => {
    const [filter, setFilter] = useState('');
    const [windowWidth, setWindowWidth] = UseWindowSize();;
    const data = useMemo(() => mData, []);

    // "Sno": 5,
    //     "LineID": "ID-5236718",
    //     "LineNumber": "line8",
    //     "Assignee": "David Wilson",
    //     "CreatedDate": "2024-03-23",
    //     "UpdateDate": "2024-03-26",
    //     "Status": "Completed"


    const columns = [
        {
            header: 'S.No',
            accessorKey: 'Sno',
            footer: 'S.No'
        },
        {
            header: 'Line ID',
            accessorKey: 'LineID',
            footer: 'Line ID'
        },
        {
            header: 'Line Number',
            accessorKey: 'LineNumber',
            footer: 'Line Number'
        },
        {
            header: 'Assignee',
            accessorKey: 'Assignee',
            footer: 'Assignee'
        },
        {
            header: 'Created Date',
            accessorKey: 'CreatedDate',
            footer: 'Created Date'
        },
        {
            header: 'Update Date',
            accessorKey: 'UpdateDate',
            footer: 'Update Date'
        },
        {
            header: 'Status',
            accessorKey: 'Status',
            footer: 'Status'
        },
    ]

    const table = useReactTable({
        data,
        columns,
        getCoreRowModel: getCoreRowModel(),
        getPaginationRowModel: getPaginationRowModel(),
        getFilteredRowModel: getFilteredRowModel(),
        state: {
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

    const outer = {
        display: 'flex',
        justifyContent: 'center',
        flex: '1'
    }

    return (
        <>


            <div className='m-10'>
                <h1 className='text-xl font-bold'>Recent Line List</h1>
                <Table>
                    <TableHeader>
                        {table.getHeaderGroups().map((headerGroup) => (
                            <TableRow key={headerGroup.id}>
                                {headerGroup.headers.map((header) => {
                                    return (
                                        <TableHead key={header.id}>
                                            {header.isPlaceholder
                                                ? null
                                                : flexRender(
                                                    header.column.columnDef.header,
                                                    header.getContext()
                                                )}
                                        </TableHead>
                                    )
                                })}
                            </TableRow>
                        ))}


                    </TableHeader>
                    <TableBody>
                        {filteredRows.length ? (
                            filteredRows.map((row) => (
                                <TableRow
                                    key={row.id}
                                    data-state={row.getIsSelected() && "selected"}
                                >
                                    {row.getVisibleCells().map((cell) => (
                                        <TableCell key={cell.id}>
                                            {flexRender(cell.column.columnDef.cell, cell.getContext())}
                                        </TableCell>
                                    ))}
                                </TableRow>
                            ))
                        ) : (
                            <TableRow>
                                <TableCell colSpan={columns.length} className="h-24 text-center">
                                    No results.
                                </TableCell>
                            </TableRow>
                        )}


                    </TableBody>


                </Table>
            </div>

        </>
    )
}
export default RecentTable;