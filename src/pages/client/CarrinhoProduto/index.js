import './index.scss';
import storage, { get } from 'local-storage';
import CabecalhoLogado from '../../../components/cabecalho-logado';
import Rodape from '../../../components/rodape';
import { useState, useEffect } from 'react';
import Storage from 'local-storage'
import { buscaProdutoPorId, mostrarImagem } from '../../../api/produtoApi';

import Cabecalho from '../../../components/cabecalho';

export default function CarrinhoProduto() {

    const [CEP, setCEP] = useState('');
    const [itens, setItens] = useState([]);
    const [valueTotal, seValueTotal] = useState(0)

    function formatarValorComVirgula(valor) {
        if (typeof valor === 'number') {
            return valor.toFixed(2).replace('.', ',');
        }
        return valor;
    }

    function deleteProduto(index) {
        const updatedItens = [...itens];
        updatedItens.splice(index, 1);
    
        window.localStorage.setItem('carrinho', JSON.stringify(updatedItens));
        setItens(updatedItens);
    
        let novoValorTotal = updatedItens.reduce((total, item) => {
            return total + Number(item.preco);
        }, 0);
    
        seValueTotal(novoValorTotal); 
    }
    
    

    async function carregarCarrinho() {
        let carrinho = await get('carrinho');
        setItens(carrinho);

        let valorTotal = 0

        await carrinho.map((item) => {
            valorTotal += Number(item.preco)
        })


        seValueTotal(valorTotal)


    }

    useEffect(() => {
        carregarCarrinho();
    }, [])


    return (
        <div className='pagina-compras'>

            {storage('usuario-logado') ? <CabecalhoLogado /> : <Cabecalho />}
            <div className='container'>
                <div className='titu'>
                    <img src='/assets/images/carrinho2.png' />
                    <p> CARRINHO DE COMPRAS </p>
                </div>

                <div className='compras'>
                    <div className='compras-produtos'>
                        <div className='topicos'>
                            <p> Produtos </p>

                            <div id='du'>
                                <p> Quantidade </p>
                                <p> Valor Total </p>
                            </div>
                        </div>
                        <hr></hr>

                        {itens.map((produto, index) =>
                            <div className='produtos' key={index}>
                                <div className='desc-produtos'>
                                    <img src={mostrarImagem(produto.img1)} />
                                    <p style={{ width: "200px", marginLeft: "10px" }}> {produto.produto} </p>
                                </div>

                                <div className='quantidade'>
                                    <div id='escolher'>
                                        <img src='/assets/images/menos.png' />
                                        <p> 1</p>
                                        <img src='/assets/images/mais.png' />
                                    </div>
                                    
                                    <img src='/assets/images/delete.png' onClick={() => {deleteProduto(index)}}/>
                                </div>

                                <p> R$ {formatarValorComVirgula(produto.promocao * 1)} </p>

                            </div>
                        )}

                        <hr></hr>

                    </div>

                    <div className='finalizando'>
                        <div className='total'>
                            <div id='valor'>
                                <p> Total </p>
                                    <p id='valor-total'>{valueTotal.toFixed(2)}</p>
                            </div>

                            <button> Comprar </button>

                        </div>

                        <div className='frete'>
                            <div id='carrin'>
                                <img src='assets/images/carrin.png' />
                                <p> Calcular o frete </p>
                            </div>

                            <div className='digite-cep'>
                                <div id='coluna'>
                                    <div className='inputi'>
                                        <input placeholder='Digite seu CEP' className='input-number' type="number" value={CEP} onChange={e => setCEP(e.target.value)} />
                                    </div>

                                    <button> OK </button>
                                </div>
                                <a href='https://buscacepinter.correios.com.br/app/endereco/index.php'>*Não sei meu cep</a>
                            </div>

                        </div>

                        <div className='pagamento-seguro'>
                            <img src='assets/images/seguranca.png' />
                            <p> Pagamento Seguro </p>
                        </div>

                    </div>



                </div>

            </div>

            <Rodape />
        </div>
    )
}