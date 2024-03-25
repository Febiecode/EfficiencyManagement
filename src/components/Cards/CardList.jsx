'use client'
import CustomCard from "./CustomCard";
import UseWindowSize from '../../Hooks/UseWindowSize'

const CardList = () => {
    const [windowWidth, setWindowWidth] = UseWindowSize();
    const cardContainer ={
        display: 'flex',
        justifyContent: 'space-evenly'
    }
    const resCardContainer = {
        display: 'flex',
        justifyContent: 'space-evenly',
        flexDirection: 'column'
    }

    const card = {
        flex: '1',
        margin: '20px',
    }
    return (
        <>
            <div className="">
                <div style={windowWidth > 600 ? cardContainer : resCardContainer}>
                    <div style={card}>
                    <CustomCard title="Total Output" count="630"/>
                    </div>
                    <div style={card}>
                    <CustomCard title="# of Lines" count="3"/>
                    </div>
                    <div style={card}>
                    <CustomCard title="# Operators present" count="12"/>
                    </div>
                    <div style={card}>
                    <CustomCard title="# Style" count="6" />
                    </div>
                </div>
            </div>

        </>
    )
}

export default CardList;