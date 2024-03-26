'use client'
import { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'
import SideBar from "./SideBar"
const NavBar = () => {
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
        'height': '80px',
    }
    return (
        <>
            <div className="w-[100%]" style={Header}>
                <SideBar />

            </div>
        </>
    )
}

export default NavBar;