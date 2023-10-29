import './index.scss';

import Cabecalho from '../../../components/cabecalho';
import Rodape from '../../../components/rodape';
import { useState } from 'react';

export default function CarrinhoProduto() {

    const [CEP, setCEP] = useState('');


    return (
        <div className='pagina-compras'>

            <Cabecalho />
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

                        <div className='produtos'>
                            <div className='desc-produtos'>
                                <img src='/assets/images/iphone13.png' />
                                <p> Apple iPhone 13 Meia-Noite <br /> 5G 128GB 6GB RAM </p>
                            </div>

                            <div className='quantidade'>
                                <div id='escolher'>
                                    <img src='/assets/images/menos.png' />
                                    <p> 1 </p>
                                    <img src='/assets/images/mais.png' />
                                </div>

                                <img src='/assets/images/delete.png' />
                            </div>

                            <p> R$ 4.249,00 </p>

                        </div>
                        <hr></hr>

                        <div className='produtos'>
                            <div className='desc-produtos'>
                                <img src='/assets/images/iphone14.png' />
                                <p> Apple iPhone 14 Pro Roxo- <br /> Profundo 128GB 6GB RAM  </p>
                            </div>

                            <div className='quantidade'>
                                <div id='escolher'>
                                    <img src='/assets/images/menos.png' />
                                    <p> 1 </p>
                                    <img src='/assets/images/mais.png' />
                                </div>
                                <img src='/assets/images/delete.png' />

                            </div>

                            <p> R$ 7.879,00 </p>

                        </div>

                    </div>

                    <div className='finalizando'>
                        <div className='total'>
                            <div id='valor'>
                                <p> Total </p>
                                <p id='valor-total'> R$ 12.128,00 </p>
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
                                    <input className='input-number' type="number" value={CEP} onChange={e => setCEP(e.target.value)} />
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