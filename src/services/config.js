import axios from 'axios';

export const http = axios.create({
    baseURL: "http://localhost:9004/api/",
    headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json;charset=utf-8',
    }
});