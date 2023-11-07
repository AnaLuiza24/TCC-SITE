import axios from 'axios';
const api = axios.create({
    baseURL: "http://localhost:5037"
})

export async function cadastrarUsuario(nome, email, senha, nasc, telefone) {
    const r = await api.post('/adicionar/cliente', {
        nome: nome,
        email: email,
        senha: senha,
        nasc: nasc,
        telefone: telefone
    })
}