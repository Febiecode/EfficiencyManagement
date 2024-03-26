import React from 'react'

import RecentOutputCard from '../micro/RecentOutputCard'

const RecentOutput = () => {
    const card = {
        flex: '1',
        marginRight: '20px',
        width: "350px"
    }
    return (
        <>
            <div className='m-10'>
                <h1 className='text-xl font-bold'>Recent Line List</h1>
                <div className='flex w-[100%] mt-5'>
                    <div style={card}>
                        <RecentOutputCard title="Output Name" subTitle="#Description" />
                    </div>
                    <div style={card}>
                        <RecentOutputCard title="Output Name" subTitle="#Description" />
                    </div>
                    <div style={card}>
                        <RecentOutputCard title="Output Name" subTitle="#Description" />
                    </div>
                    <div style={card}>
                        <RecentOutputCard title="Output Name" subTitle="#Description" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default RecentOutput