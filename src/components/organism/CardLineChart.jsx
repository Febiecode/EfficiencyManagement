import React from 'react'
import CardList from "../molecules/CardList";
import LineChart from "../Charts/LineChart";
import BarChart from "../Charts/BarChart";
import PieChart from "../Charts/PieChart";
import RecentOutputCardList from '../molecules/RecentOutputCardList';

const CardLineChart = () => {

    const CardChart1 = {
        display: 'flex',
        justifyContent: 'space-evenly',
        marginTop: '40px'
    }
    const CardChart2 = {
        display: 'flex',
        justifyContent: 'space-around',
        alignItem: 'center',
        marginTop: '40px',
        
    }
    return (
        <>

            <div style={CardChart1}>
                <CardList />
                <PieChart />
            </div>
            <RecentOutputCardList />
            <div style={CardChart2}>
                
                <LineChart />
                <BarChart />
            </div>

        </>
    )
}

export default CardLineChart