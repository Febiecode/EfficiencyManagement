'use client'
import CustomCard from "./CustomCard";

const CardList = () => {
    return (
        <>
            <div className="">
                <div className="container">
                    <CustomCard title="Total Output" count="630" className="item"/>
                    <CustomCard title="# of Lines" count="3" className="item"/>
                    <CustomCard title="# Operators present" count="12" className="item"/>
                    <CustomCard title="# Style" count="6" className="item"/>
                    <style jsx>{`
                        
                        .container {
                            display: flex;
                        flex-wrap: wrap; /* Allow items to wrap to the next line */
                        justify-content: space-between; /* Distribute items evenly with space between them */
                        }
                        .item {
                            flex: 1 1 200px; /* Flex-grow, flex-shrink, flex-basis */
                        /* You can adjust these values based on your requirements */
                        margin: 10px; /* Add some space between items */
                        background-color: #f0f0f0;
                        text-align: center;
                        padding: 20px;
                        }
                    `}
                    </style>
                </div>
            </div>

        </>
    )
}

export default CardList;