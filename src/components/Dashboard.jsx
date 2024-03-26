// Dashboard.tsx
import React from 'react';
// import CardList from './Cards/CardList';
// import ChartList from './Charts/ChartList';
// import NavBar from './Navigation/NavBar';



import Navbar from "./molecules/NavBar"
import Title from "./molecules/Title"
import CardLineChart from "./organism/CardLineChart"
import RecentTable from "./Table/Recent/RecentTable"


const Dashboard = () => {


    return (
        <>
            <Navbar />
            <Title />
            <CardLineChart />
            
            <RecentTable />
        </>
    )
}

export default Dashboard
