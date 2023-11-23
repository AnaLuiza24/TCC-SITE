import axios from 'axios'
import CabecalhoAdm from '../../../components/cabecalhoADM';
import './index.scss';
import { useState } from 'react';

export default function ListaPedido() {
    const [pedidoss, setpedidoss] = useState([]);
    const [busca, setBusca] = useState('')

    async function buscar(){
        let url = 'http://localhost:5039/listar/pedidoss?nome=' + busca;
        let resp = await axios.get(url);
        setpedidoss([...resp.data]);
    }



    return (
        <main className='pagina-lista-pedidos'>
            <CabecalhoAdm />
            <header className='lista-pedidos-principal'>
                <section className='lista-pedidos-titulo'>
                    <div>
                        <img src='/assets/images/editar.png' alt='lista' />
                        <h2>Lista de Pedidos</h2>
                    </div>

                    <div className='busca'>
                        <input type='text' placeholder='Buscar por nome' value={busca} onChange={e => setBusca(e.target.value)}/>
                        <img style={{cursor: "pointer"}} src='/assets/images/lupa.png' alt='lupa' onClick={buscar}/>
                    </div>
                </section>

                <section>
                    <table>
                        <thead>
                            <tr>
                               <th>Nome do cliente</th>
                                <th>Produto</th>
                                <th>Valor</th>
                                <th>Status</th>
                            </tr>
                        </thead>

                        <tbody>
                            {pedidoss.map(item => (
                                <tr>
                                <td>{item.nomeCliente}</td>
                                <td>{item.produtos}</td>
                                <td>R$ {item.valor}</td>
                                <td>{item.Status}</td>
                            </tr>
                            ))}
                        </tbody>
                    </table>
                </section>
            </header>
        </main>
    )
}