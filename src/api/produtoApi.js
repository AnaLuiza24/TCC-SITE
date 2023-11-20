import axios from 'axios';
import { api_url } from '../constant.js';
const api = axios.create({
    baseURL: api_url
})

export async function listarProdutosInicio(){

    const Produtos = [

        {
            id : '1',
            nome : 'Iphone 15',
            desc : 'Desc Iphone 15'
        },

        {
            id : '2',
            nome : 'Iphone 15 Pro',
            desc : 'Desc Iphone 15 Pro'
        },

        {
            id : '3',
            nome : 'Iphone 15 Pro Max',
            desc : 'Desc Iphone 15 Pro Max'
        },

        {
            id : '4',
            nome : 'Iphone 14',
            desc : 'Desc Iphone 14'
        },

        {
            id : '5',
            nome : 'Iphone 14 Pro',
            desc : 'Desc Iphone 14 Pro'
        },

        {
            id : '6',
            nome : 'Iphone 14 Pro Max',
            desc : 'Desc Iphone 14 Pro Max'
        },

        {
            id : '7',
            nome : 'Iphone 13',
            desc : 'Desc Iphone 13'
        },

        {
            id : '8',
            nome : 'Iphone 13 Pro',
            desc : 'Desc Iphone 13 Pro'
        },

        {
            id : '9',
            nome : 'Iphone 13 Pro Max',
            desc : 'Desc Iphone 13 Pro Max'
        },

        {
            id : '10',
            nome : 'Iphone 12',
            desc : 'Desc Iphone 12'
        },

        {
            id : '11',
            nome : 'Iphone 12 Pro',
            desc : 'Desc Iphone 12 Pro'
        },

        {
            id : '12',
            nome : 'Iphone 12 Pro Max',
            desc : 'Desc Iphone 12 Pro Max'
        },

        {
            id : '13',
            nome : 'Iphone 11',
            desc : 'Desc Iphone 11'
        },

        {
            id : '14',
            nome : 'Iphone 11 Pro',
            desc : 'Desc Iphone 11 Pro'
        },

        {
            id : '15',
            nome : 'Iphone 11 Pro Max',
            desc : 'Desc Iphone 11 Pro Max'
        },


        {
            id : '16',
            nome : 'Samsung S20 Fe',
            desc : 'Desc do Samsung S20 Fe'
        },

        {
            id : '17',
            nome : 'Samsung S20 Ultra',
            desc : 'Desc Samsung S20 Ultra'
        },

        {
            id : '18',
            nome : 'Samsung S21 Fe',
            desc : 'Desc Samsung S21 Fe'
        },

        {
            id : '19',
            nome : 'Samsung S21 Ultra',
            desc : 'Desc Samsung S21 Ultra'
        },

        {
            id : '20',
            nome : 'Samsung S22 Fe',
            desc : 'Desc Samsung S22 Fe'
        },

        {
            id : '21',
            nome : 'Samsung S22 Ultra',
            desc : 'Desc Samsung S22 Ultra'
        },

        {
            id : '22',
            nome : 'Samsung S23 Fe',
            desc : 'Desc Samsung S23 Fe'
        },

        {
            id : '23',
            nome : 'Samsung S23 Ultra',
            desc : 'Desc Samsung S23 Ultra'
        },

        {
            id : '24',
            nome : 'Samsung Galaxy Z Flip 4',
            desc : 'Desc Samsung Galaxy Z Flip 4'
        },

        {
            id : '25',
            nome : 'Samsung Galaxy Z Flip 5',
            desc : 'Desc Samsung Galaxy Z Flip 5'
        },

        {
            id : '26',
            nome : 'Samsung Galaxy Z Fold 4',
            desc : 'Desc Samsung Galaxy Z Fold 4'
        },

        {
            id : '27',
            nome : 'Samsung Galaxy Z Fold 5',
            desc : 'Desc Samsung Galaxy Z Fold 5'
        },


        {
            id : '28',
            nome : 'Motorola G14',
            desc : 'Desc Motorola G14'
        },

        {
            id : '29',
            nome : 'Motorola G23',
            desc : 'Desc Motorola G23'
        },

        {
            id : '30',
            nome : 'Motorola G52',
            desc : 'Desc Motorola G52'
        },

        {
            id : '31',
            nome : 'Motorola G53',
            desc : 'Desc Motorola G53'
        },

        {
            id : '32',
            nome : 'Motorola G54',
            desc : 'Desc Motorola G54'
        },

        {
            id : '33',
            nome : 'Motorola G73',
            desc : 'Desc Motorola G73'
        },

        {
            id : '34',
            nome : 'Motorola G84',
            desc : 'Desc Motorola G84'
        },

        {
            id : '35',
            nome : 'Motorola Edge 30 Neo',
            desc : 'Desc Motorola Edge 30 Neo'
        },

        {
            id : '36',
            nome : 'Motorola Edge 30 Fusion',
            desc : 'Desc Motorola Edge 30 Fusion'
        },

        {
            id : '37',
            nome : 'Motorola Edge 30 Ultra',
            desc : 'Desc Motorola Edge 30 Ultra'
        },

        {
            id : '38',
            nome : 'Motorola Edge 40',
            desc : 'Desc Motorola Edge 40'
        },

        {
            id : '39',
            nome : 'Motorola Edge 40 Neo',
            desc : 'Desc Motorola Edge 40 Neo'
        },


        {
            id : '40',
            nome : 'Xiaomi Redmi 10',
            desc : 'Desc Xiaomi Redmi 10'
        },

        {
            id : '41',
            nome : 'Xiaomi Redmi Note 11s',
            desc : 'Desc Xiaomi Redmi Note 11s'
        },

        {
            id : '42',
            nome : 'Xiaomi Redmi 12 Lite',
            desc : 'Desc Xiaomi Redmi 12 Lite'
        },

        {
            id : '43',
            nome : 'Xiaomi Redmi 12s',
            desc : 'Desc Xiaomi Redmi 12s'
        },

        {
            id : '44',
            nome : 'Xiaomi Redmi Note 12 Pro',
            desc : 'Desc Xiaomi Redmi Note 12 Pro'
        },

        {
            id : '45',
            nome : 'Xiaomi Redmi 13',
            desc : 'Desc Xiaomi Redmi 13'
        },

        {
            id : '46',
            nome : 'Xiaomi Redmi 13 ultra',
            desc : 'Desc Xiaomi Redmi 13 ultra'
        },

        {
            id : '47',
            nome : 'Xiaomi Mi 11T',
            desc : 'Desc Xiaomi Mi 11T'
        },

        {
            id : '48',
            nome : 'Xiaomi K60 Ultra',
            desc : 'Desc Xiaomi K60 Ultra'
        },

        {
            id : '48',
            nome : 'Xiaomi Poco C65',
            desc : 'Desc Xiaomi Poco C65'
        },

        {
            id : '50',
            nome : 'Xiaomi Poco M5s',
            desc : 'Desc Xiaomi Poco M5s'
        },

        {
            id : '51',
            nome : 'Xiaomi Poco X5',
            desc : 'Desc Xiaomi Poco X5'
        },
        
    ]

    const r = await api.get('/api/produto');
    return r.data;
}

export async function buscaProdutoPorId(id) {
    const r = await api.get('/api/produto/' + id);
    return r.data;
}

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

export async function alterarProduto(id, marca, categoria, nome, preco, cor, qtd, desc, precoPromocao) {
    const r = await api.post(`/produto/${id}`, {
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