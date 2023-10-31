import axios from 'axios';
const api = axios.create({
    baseURL: "http://localhost:5037"
})

export async function listarSmartphones(){
    const r = await api.get('/smartphones');
    return r.data;
} 

export async function cadastrarProduto( marca , categoria ,nome, preco , cor , qtd , desc , precoPromocao){
    const resposta = await api.post('/adicionar-produto', {
         marca: marca,
            categoria: categoria,
            nome: nome,
            preco: preco,
            cor: cor,
            qtd: qtd,
            desc: desc,
            precopromo: precoPromocao
        
    })
    
    return resposta.data;
}

export async function enviarImagem(imagem,id){
    const formData = new FormData();
    formData.append('capa', imagem);

    const resposta = api.await.post(`/produto${id}/imagem`, formData,{
        headers:{
            "Content-Type": "multipart/form-data"
        }
    })
    return resposta.status;
}
