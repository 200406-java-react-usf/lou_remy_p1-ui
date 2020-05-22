import React, { useEffect, useState } from 'react';
import { Redirect } from 'react-router-dom';
import { Card, Typography, CardContent } from '@material-ui/core';
import { Reimbursement } from '../models/reimb'
import { User } from '../models/user';
import  {getallreimbsbyid}  from '../remote/reimb-services';
import { Link } from '@material-ui/core'

interface IHomeProps {
    authUser: any;
    
}

const HomeComponent = (props: IHomeProps) => {
    const [reimbState,setReimbState] = useState([] as Reimbursement[])
    let myReimbs: any[] = [];
    useEffect(()=>{
        async function getData(){
            const response = await getallreimbsbyid(props.authUser.id)
            for( let i of response ){
                myReimbs.push(
                    <tr>
                        <td>{i.reimb_id}</td>
                        <td>{i.amount}</td>
                        <td>{i.submitted}</td>
                        <td>{i.resolved}</td>
                        <td>{i.description}</td>
                        <td>{i.author_id}</td>
                        <td>{i.resolver_id}</td>
                        <td>{i.reimb_status_id}</td>
                        <td>{i.reimb_type_id}</td>
                        <td><Link></Link></td>
                    </tr>
                )
            }
            setReimbState(myReimbs)
        }
        getData()
    },[])
  


    return (
        !props.authUser ?
        <Redirect to="/login" /> : 
        <>
            <h1>Welcome, {props.authUser.username}!</h1>
            <table>
                <thead>

                    <tr>
                      <th>id</th>
                      <th>amount</th>
                      <th>submitted</th>
                      <th>resolved</th>
                      <th>description</th>
                      <th>author_id</th>
                      <th>resolver_id</th>
                      <th>reimb_status_id</th>
                      <th>reimb_type_id</th>      
                    </tr>
                </thead>
                <tbody>
                {reimbState}
                </tbody>
            </table>
        </>
    );

}

export default HomeComponent;