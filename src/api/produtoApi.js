import axios from 'axios';
const api = axios.create({
    baseURL: "http://localhost:5039"
})

export async function listarSmartphones(){
    const r = await api.get('/smartphones');
    return r.data;
}
export async function buscarAcessoriosPorMarca(marca){
    const r = await api.get('/acessorios/' + marca);
    return r.data;
}

export async function buscarSmartphonesPorMarca(marca){
    const r = await api.get('/smartphone/' + marca);
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

    return r.data;
}

export async function enviarImagemUm(id, imagem) {
    const formData = new FormData();
    formData.append('fotoProduto', imagem);

    const r = await api.put(`/alterar/${id}/imagemum`, formData, {
        headers: {
            "Content-Type": "multipart/form-data"
        }
    });

    return r.status
}

export async function enviarImagemDois(id, imagemDois) {
    const formData = new FormData();
    formData.append('fotoProduto', imagemDois);
    const r = await api.put(`/alterar/${id}/imagemdois`, formData, {
        headers: {
            "Content-Type": "multipart/form-data"
        }
    });

    return r.status
}

