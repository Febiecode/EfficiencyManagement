
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "../ui/card"
import {useRangeStore} from "../../Context/Store"

import { Separator } from "../ui/separator"




const CustomCard = (props) => {

    const range = useRangeStore((state)=>state.range)
    const date = {
        fontSize: '12px',
        padding: '0',

    }

    const footer = {
        color: "#026984",
        margin: '20px 0 0 0',
        padding: '0'
    }
    return (
        <>        
            <Card>
                <CardHeader>
                    <p>{props.title}</p>
                    {/* <CardDescription style={date}>02 Mar 2024 - 10 Mar 2024</CardDescription> */}
                    <CardDescription style={date}>{range}</CardDescription>
                    <CardTitle>{props.count} {props.subTitle}</CardTitle>

                </CardHeader>
                <Separator />


                <CardFooter>
                    <p style={footer}>See</p>
                </CardFooter>
            </Card>

        </>
    );
};

export default CustomCard;
