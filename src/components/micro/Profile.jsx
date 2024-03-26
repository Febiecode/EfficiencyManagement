'use client'
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

const Profile = (props) => {

    const containerStyle = {
        display: 'flex',
        alignItems: 'center'
    };

    const logoStyle = {
        marginRight: '10px'
    };

    const titleStyle = {
        display: 'flex',
        flexDirection: 'column'
    };

    const titleTextStyle = {
        fontSize: '14px',
        textTransform: 'capitalize',
        color: '#6c757d', // muted color
        margin: '0'
    };

    const descriptionStyle = {
        fontSize: '14px',
        margin: '0',
        padding: '0',
        fontWeight: '500',
        outline: 'none'
    };

    const avatarStyle = {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '40px',
        height: '40px',
        backgroundColor: '#f0f0f0', // fallback background color
        borderRadius: '50%',
        overflow: 'hidden'
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
                <h1 style={titleTextStyle}>Welcome</h1>
                <select name='profile' id="">
                    <option value="1">abc@gmail.com</option>
                    <option value="2">a123@gmail.com</option>
                    <option value="3">abc123@gmail.com</option>
                </select>
            </div>

            <style jsx>{`
            `}</style>
        </div>
    );
};

export default Profile;
