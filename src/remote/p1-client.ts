import axios from 'axios';

export const p1Client = axios.create({
    baseURL: "http://localhost:8080",
    headers:{
        'Content-Type': 'application/json'
    }
})