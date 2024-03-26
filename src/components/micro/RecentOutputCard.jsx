import React from 'react'
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "../ui/card"

import { Separator } from "../ui/separator"
const RecentOutputCard = (props) => {
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
        <div>
            <Card>

                <CardHeader>
                    <p>{props.title}</p>
                    <CardDescription style={date}>{props.subTitle}</CardDescription>
                    

                </CardHeader>
                <Separator />


                <CardFooter>
                    <p style={footer}>See</p>
                </CardFooter>
            </Card>
        </div>
    )
}

export default RecentOutputCard