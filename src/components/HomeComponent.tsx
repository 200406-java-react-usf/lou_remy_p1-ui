import React from 'react';
import { Redirect } from 'react-router-dom';
import { Card, Typography, CardContent } from '@material-ui/core';
import { Reimbursement } from '../models/reimb'

interface IHomeProps {
    username: string;
    reimbs: Reimbursement[]
}

const HomeComponent = (props: IHomeProps) => {

    let myReimbs: any[] = [];
    props.reimbs.forEach(reimb => {
        myReimbs.push(
            <Card>
                <CardContent>
                    <Typography variant="h5">
                        {reimb.description}
                    </Typography>
                    <Typography color="textSecondary">
                        {reimb.amount}
                    </Typography>
                </CardContent>
            </Card>
        );
    });


    return (
        !props.username ?
        <Redirect to="/login" /> : 
        <>
            <h1>Welcome, {props.username}!</h1>
            {myReimbs}
        </>
    );

}

export default HomeComponent;