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
        'backgroundColor': '#E6D4B2',
    }
    return (
        <>
            <div className="w-[100%]" style={Header}>
                <SideBar />

                <div className='flex space-around justify-center items-center pt-5'>
                    <img src="https://th.bing.com/th/id/R.cd0eefddd6da8cb434695b761af1b6f3?rik=zO051BNg01mwkw&riu=http%3a%2f%2fcdn.onlinewebfonts.com%2fsvg%2fimg_268090.png&ehk=W%2bsAk098xRYGdFrBRr1tHK0lGhIcKfMZNG%2b2GNX1s8o%3d&risl=&pid=ImgRaw&r=0" alt="machine" width={30} height={30}/>
                    <p className="text-2xl font-extrabold text-center items-center ms-3">{activeLabel}</p>
                </div>
            </div>
        </>
    )
}

export default NavBar;