
'use client'
import Logo from "../micro/Logo"
import Search from "../micro/Search"
import Profile from "../micro/Profile"
import Navbar from '../Navigation/NavBar'

const NavBar = () => {

    const container = {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        margin: '10px 20px'
    }
    const navMenu = {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: "40%",
    }

    return (
        <>
            <div style={container}>
                <div style={navMenu}>
                    <div>
                        <Navbar />
                    </div>
                    <div>

                        <Logo />
                    </div>
                    <div>
                        <Search />
                    </div>
                </div>
                <div>
                    <Profile />
                </div>
            </div>
        </>
    )
}

export default NavBar;