
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "../../components/ui/card"



const CustomCard = (props) => {


    return (
        <>
            <Card>
                <CardHeader>
                    <CardTitle>{props.count}</CardTitle>
                    <CardDescription>{props.title}</CardDescription>
                </CardHeader>
            </Card>

        </>
    );
};

export default CustomCard;
