import axios from 'axios';
const api = axios.create({
    baseURL: "http://localhost:5037"
})

export async function listarSmartphones(){
    const r = await api.get('/smartphones');
    return r.data;
}