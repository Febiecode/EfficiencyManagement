import Link from 'next/link'
import Image from 'next/image'


const MenuItem = (props) => {

    const menuItemStyle1 = {
        hover: '#fff',
    }

    const menuItemStyle2 = {
        hover: '#026984',
    }
    return (
        <li>

            <div className='menu'>
            <Link href={props.href || ''}
                className="flex h-full w-full items-center gap-3 rounded-md px-3 menu">
                <Image src={props.icon} width={20}
                        height={20}
                         />
                <span className="menuItem">
                
                    {props.label}
                </span>

            </Link>
            </div>

            <style jsx>{`
                .menuItem {
                    display: flex;
                    height: 100%;
                    width: 100%;
                    align-items: center;
                    gap: 3px;
                    border-radius: 0.25rem;
                    padding: 0.75rem;
                    transition: background-color 0.3s ease;
                }

                .menuItem:hover {
                    color: ${menuItemStyle1.hover};
                }

                .menu:hover {
                    background-color: ${menuItemStyle2.hover};
                    border-radius: 10px;
                }


            `}</style>
        </li>
    )
}

export default MenuItem;