'use client'
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar"

const Logo = () => {
    const containerStyle = {
        display: 'flex',
        alignItems: 'center',
    };

    const logoStyle = {
        display: 'block',
        marginRight: '10px'
    };

    const titleStyle = {
        display: 'flex',
        flexDirection: 'column'
    };

    const titleTextStyle = {
        fontSize: '20px',
        fontWeight: 'bold',
        margin: '0'
    };

    const descriptionStyle = {
        fontSize: '20px',
        textTransform: 'capitalize',
        color: '#6c757d', // muted color
        margin: '0',
        padding: '0',
        fontWeight: '300'
    };

    const avatarStyle = {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '50px',
        height: '50px',
        backgroundColor: '#f0f0f0', // fallback background color
        borderRadius: '50%',
        overflow: 'hidden'
    };

    const avatarImageStyle = {
        width: '100%',
        height: '100%',
        objectFit: 'cover'
    };


    return (
        <div style={containerStyle}>
            <div style={logoStyle}>
                <Avatar style={avatarStyle}>
                    <AvatarImage src="https://github.com/shadcn.png" />
                    <AvatarFallback>CN</AvatarFallback>
                </Avatar>

            </div>
            <div style={titleStyle}>
                <h1 style={titleTextStyle}>EFFICIENT</h1>
                <p style={descriptionStyle}>Management System</p>
            </div>
        </div>
    );
}

export default Logo;