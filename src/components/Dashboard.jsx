// Dashboard.tsx
import React from 'react';
import CardList from './Cards/CardList';
import ChartList from './Charts/ChartList';
import NavBar from './Navigation/NavBar';

const Dashboard = () => {
    return (
        <>
            <NavBar />
            <CardList />
            <ChartList />
        </>
    );
};

export default Dashboard;
