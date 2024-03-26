'use client'
import React from 'react'
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation'

import DataPickerDemo from '../micro/DataPickerDemo'
import { Button } from '../ui/button';

const Title = () => {
    const [activeLabel, setActiveLabel] = useState('')
    const path = usePathname()

    useEffect(() => {
        switch (path) {
            case '/':
                setActiveLabel("Dashboard")
                break
            case '/productivityReport':
                setActiveLabel("Productivity Report")
                break
            case '/efficiencyReport':
                setActiveLabel("Efficiency Report")
                break
            case '/processMaster':
                setActiveLabel("Process Master")
                break
            case '/machineMaster':
                setActiveLabel("Machine Master")
                break
            case '/lineAssign':
                setActiveLabel("Line Assign")
                break

            default:
                break
        }
    }, [])

    const Header = {
        margin: '0 50px'
    }
    const titleTextStyle = {
        fontSize: '12px',
        textTransform: 'capitalize',
        color: '#6c757d', // muted color
        margin: '0'
    };

    const custom = {
        backgroundColor: "#026984",
        fontSize: '12px',
    }
    return (
        <>
            <div className='flex justify-between'>
                <div style={Header}>
                    <h1 className='text-3xl font-bold'>{activeLabel}</h1>
                    <p style={titleTextStyle}>Find your all update here</p>
                </div>
                <div className='flex justify-between mx-5'>
                    <div className='ms-2'>
                        <DataPickerDemo />
                    </div>
                    <div className='mx-5'>
                        <Button style={custom}>Generate</Button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Title;
