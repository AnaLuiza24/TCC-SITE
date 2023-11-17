import axios from 'axios';
const api = axios.create({
    baseURL: "http://localhost:5039"
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

export async function alterarCliente(nome, email, nasc, telefone, id) {
    const r = await api.put('/cliente', {
        nome: nome,
        email: email,
        nascimento: nasc,
        telefone: telefone,
        id: id
    })
}

export async function alterarSenha(senha, id) {
    const r = await api.put('/cliente/senha', {
        senha: senha,
        id: id
    })
}


