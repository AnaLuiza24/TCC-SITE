import axios from 'axios'
import CabecalhoAdm from '../../../components/cabecalhoADM';
import './index.scss';
import { listarPedidos } from '../../../api/admApi';
import { useState } from 'react';

export default function ListaPedido() {
    const [pedidos, setPedidos] = useState([]);
    const [busca, setBusca] = useState('')
    const [erro , setErro]=useState();

    async function buscar(){
        try {
            const r = await listarPedidos();
            setPedidos([...r]);
            console.log(r);

        } catch (err) {
            if (err.response.status === 500) {
                setErro(err.response.data.erro);
            }
        }
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
                                <th>Forma de pagamento</th>
                                <th>Situacao</th>
                            </tr>
                        </thead>

                        <tbody>
                            {pedidos.map(item => (
                                <tr>
                                <td>{item.nome}</td>
                                <td>{item.produto}</td>
                                <td>R$ {item.valor}</td>
                                <td>{item.pagamento}</td>
                                <td>{item.situacao}</td>
                            </tr>
                            ))}
                        </tbody>
                    </table>
                </section>
            </header>
        </main>
    )
}