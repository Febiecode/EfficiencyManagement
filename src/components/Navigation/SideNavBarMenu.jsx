'use client'
import { nanoid } from 'nanoid'
import MenuItem from './MenuItem'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'

const menu = [
    {
        id: nanoid(),
        href: '/',
        label: 'Dashboard'
    },
    {
        id: nanoid(),
        href: '/productivityReport',
        label: 'Productivity Report'
    },
    {
        id: nanoid(),
        href: '/efficiencyReport',
        label: 'Efficiency Report'
    },
    {
        id: nanoid(),
        href: '/processMaster',
        label: 'Process Master'
    },
    {
        id: nanoid(),
        href: '/machineMaster',
        label: 'Machine Master'
    },
    {
        id: nanoid(),
        href: '/lineAssign',
        label: 'Line Assign'
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

    return (
        <ul className='mt-5 w-full list-none p-0'>
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
