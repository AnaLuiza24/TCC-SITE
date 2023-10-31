import axios from 'axios';
const api = axios.create({
    baseURL: "http://localhost:5037"
})

export async function loginAdm(email, senha) {
    const r = await api.post('/adm/login', {
        email: email,
        senha: senha
    });

    return r.data; 
};
