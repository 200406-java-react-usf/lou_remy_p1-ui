import { p1Client } from "./p1-client"

export async function authenticate(username:string, password:string){
    let resp = await p1Client.post('/auth', {username,password})
    return await resp.data
}