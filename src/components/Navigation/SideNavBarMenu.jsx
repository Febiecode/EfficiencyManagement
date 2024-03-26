'use client'
import { nanoid } from 'nanoid'
import MenuItem from './MenuItem'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'


const menu = [
    {
        id: nanoid(),
        href: '/',
        label: 'Dashboard',
        icon: '/icon/dashboard.png'
    },
    {
        id: nanoid(),
        href: '/productivityReport',
        label: 'Productivity Report',
        icon: '/icon/productivity.png'
    },
    {
        id: nanoid(),
        href: '/efficiencyReport',
        label: 'Efficiency Report',
        icon: '/icon/efficiency.png'
    },
    {
        id: nanoid(),
        href: '/processMaster',
        label: 'Process Master',
        icon: '/icon/process.png'
    },
    {
        id: nanoid(),
        href: '/machineMaster',
        label: 'Machine Master',
        icon: '/icon/machine.png'
    },
    {
        id: nanoid(),
        href: '/lineAssign',
        label: 'Line Assign',
        icon: '/icon/line.png'
    }
]

const SideNavbarMenu = () => {
    const path = usePathname()
    const [activeMenu, setActiveMenu] = useState(-1)

    useEffect(() => {
        switch (path) {
            case '/':
                setActiveMenu(0)
                break
            case '/productivityReport':
                setActiveMenu(1)
                break
            case '/efficiencyReport':
                setActiveMenu(2)
                break
            case '/processMaster':
                setActiveMenu(3)
                break
            case '/machineMaster':
                setActiveMenu(3)
                break
            case '/lineAssign':
                setActiveMenu(3)
                break

            default:
                break
        }
    }, [])

    const adminTitle = {
        marginLeft:'12px',
        marginBottom:'10px',
        color: "#026984",
        fontWeight:'500'
    }

    return (
        <ul className='mt-5 w-full list-none p-0'>
            <p style={adminTitle}>Admin Operation</p> 
            {menu.map((item, index) => (
                <MenuItem
                    key={item.id}
                    active={index === activeMenu}
                    {...item} 
                />
                
            ))}
        </ul>
    )
}

export default SideNavbarMenu;
