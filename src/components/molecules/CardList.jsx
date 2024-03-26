'use client'
import CustomCard from "../micro/CustomCard";
import UseWindowSize from '../../Hooks/UseWindowSize'

const CardList = () => {
    const [windowWidth, setWindowWidth] = UseWindowSize();
    const cardContainer = {
        display: 'flex',
        width: '45%',
        flexDirection: 'row',
        flexWrap: 'wrap',

        alignItems: 'center',
        marginRight: '40px'
    }
    const resCardContainer = {
        display: 'flex',
        width: '45%',
        justifyContent: 'space-evenly',
        flexDirection: 'column',
    }

    // const div = {
    //     width: '100%'
    // }

    const card = {
        flex: '1',
        marginRight: '20px',
        width: "350px"
    }
    return (
        <>

            <div style={windowWidth > 1200 ? cardContainer : resCardContainer} className="flex">

                <div className="flex flex-row w-[100%]">
                    <div style={card}>
                        <CustomCard title="Total Output" subTitle="Output" count="630" />
                    </div>

                    <div style={card}>
                        <CustomCard title="No. of Operators" subTitle="Members" count="12" />
                    </div>
                </div>
                <div className="flex flex-row w-[100%]">
                    <div style={card}>
                        <CustomCard title="No. of Lines" subTitle="Lines" count="3" />
                    </div>


                    <div style={card}>
                        <CustomCard title="No. of Style" subTitle="Styles" count="6" />
                    </div>
                </div>
            </div>


        </>
    )
}

export default CardList;