import {p1Client} from './p1-client'

export async function getallreimbsbyid(id:number){
    let response = await p1Client.get(`/myreimb/${id}`)
    return response.data
}

export async function getallreimbs(){
    let response = await p1Client.get('/reimbs')
    return response.data
}