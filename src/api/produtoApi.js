import axios from 'axios';
const api = axios.create({
    baseURL: "http://localhost:5037"
})

export async function listarSmartphones(){
    const r = await api.get('/smartphones');
    return r.data;
}
export async function listarAcessorios(){
    const r = await api.get('/acessorios');
    return r.data;
}

export async function Marcas() {
    const r = await api.get('/marcas/listar');
    return r.data;
}

export async function Categorias() {
    const r = await api.get('/categoria/listar');
    return r.data
}

export async function Adicionar(marca, categoria, nome, preco, cor, qtd, desc, precoPromocao) {
    const r = await api.post('/produto', {
        marca: marca,
        categoria: categoria,
        nome: nome,
        preco: preco,
        cor: cor,
        qtd: qtd,
        desc: desc,
        precopromo: precoPromocao
    })
}

