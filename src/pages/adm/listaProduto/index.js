import axios from 'axios'
import CabecalhoAdm from '../../../components/cabecalhoADM';
import './index.scss';
import { useState } from 'react';

export default function ListaProduto() {
    const [produtos, setProdutos] = useState([]);

    async function buscar(){
        let url = 'http://localhost:5037/listar/produtos';
        let resp = await axios.get(url);
        setProdutos([...resp.data]);
    }

    async function deletar(id){
        let url = 'http://localhost:5037/deletar/' + id;
        let resp = await axios.delete(url);
        buscar();

        return resp;
    }


    return (
        <main className='pagina-lista-produto'>
            <CabecalhoAdm />
            <header className='lista-produto-principal'>
                <section className='lista-produto-titulo'>
                    <div>
                        <img src='./assets/images/editar.png' alt='lista' />
                        <h2>Lista de Produtos</h2>
                    </div>

                    <div className='busca'>
                        <input type='text' placeholder='Buscar por nome' />
                        <img src='./assets/images/lupa.png' alt='lupa' onClick={buscar}/>
                    </div>
                </section>

                <section>
                    <table>
                        <thead>
                            <tr>
                                <th>Produto</th>
                                <th>Preço</th>
                                <th>Categoria</th>
                                <th>Disponibilidade</th>
                                <th></th>
                            </tr>
                        </thead>

                        <tbody>
                            {produtos.map(item => (
                                <tr>
                                <td>{item.produto}</td>
                                <td>R$ {item.preco}</td>
                                <td>{item.categoria}</td>
                                <td>{item.disponibilidade = true ? 'Sim' : 'Não'}</td>
                                <td>
                                    <div>
                                        <img src='./assets/images/excluir.png' alt='lixo' style={{width: '40px', height: '40px', cursor: 'pointer'}} onClick={() => deletar(item.id)}/>
                                        <img src='./assets/images/alterar.png' alt='alterar' style={{width: '45px', height: '45px'}}/>
                                    </div>
                                </td>
                            </tr>
                            ))}
                        </tbody>
                    </table>
                </section>
            </header>
        </main>
    )
}