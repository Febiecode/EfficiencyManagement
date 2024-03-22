import {
  Card
}  from "../../components/ui/card"


const CustomCard = (props) => {

    const title={
        'background-color' : '#E15465',
        'color': '#ffffff',
        'height': '40px',
        'width': '280px',
    }

    const shadow = {
        'box-shadow': 'rgba(0, 0, 0, 0.07) 0px 1px 1px, rgba(0, 0, 0, 0.07) 0px 2px 2px, rgba(0, 0, 0, 0.07) 0px 4px 4px, rgba(0, 0, 0, 0.07) 0px 8px 8px, rgba(0, 0, 0, 0.07) 0px 16px 16px'
    }
    return (
        <>
            <Card className="w-[280px] mt-3" style={shadow}>
                <div style={title} className="flex justify-center items-center">
                    <p className="text-md font-bold">{props.title}</p>
                </div>
                <div className="text-center">
                    <p className="text-3xl font-bold p-5">{props.count}</p>
                </div>
            </Card>
        </>
    );
};

export default CustomCard;
