import Link from 'next/link'

const MenuItem = (props) => {

    const menuItemStyle = {
        hover: '#E15465'
    }
    return (
        <li>
            <Link href={props.href || ''}
                className="flex h-full w-full items-center gap-3 rounded-md px-3 hover:bg-gray-100">
                <span className="menuItem">
                    {props.label}
                </span>

            </Link>

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
                    color: ${menuItemStyle.hover};
                }
            `}</style>
        </li>
    )
}

export default MenuItem;