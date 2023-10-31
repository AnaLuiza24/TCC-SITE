import axios from 'axios';
import CabecalhoAdm from '../../../components/cabecalhoADM';
import './index.scss';
import { useState } from 'react';
import { buscarClientes } from '../../../api/admApi';

export default function ListaCliente() {
    const [clientes, setClientes] = useState([]);
    const [busca, setBusca] = useState('')
    const [erro, setErro] = useState('');

    async function buscar(){
        try{
            let r = await buscarClientes(busca)
            setClientes([...r.data]);
        }catch(err){
            if (err.response.status === 500) {
                setErro(err.response.data.erro);
            }
        }
    }

    return (
        <main className='pagina-lista-cliente'>
            <CabecalhoAdm />
            <header className='lista-cliente-principal'>
                <section className='lista-cliente-titulo'>
                    <div>
                        <img src='./assets/images/editar.png' alt='lista' />
                        <h2>Lista de Clientes</h2>
                    </div>

                    <div className='busca'>
                        <input type='text' placeholder='Buscar por nome' value={busca} onChange={e => setBusca(e.target.value)}/>
                        <img src='./assets/images/lupa.png' alt='lupa' onClick={buscar}/>
                    </div>
                </section>

                <section>
                    <table>
                        <thead>
                            <tr>
                                <th>Nome do Cliente</th>
                                <th>E-mail</th>
                                <th>Telefone</th>
                                <th>Data de Nascimento</th>
                            </tr>
                        </thead>

                        <tbody>
                            {clientes.map(item => 
                                <tr>
                                    <td>{item.nome}</td>
                                    <td>{item.email}</td>
                                    <td>{item.telefone}</td>
                                    <td>{new Date(item.nasc).toLocaleDateString()}</td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </section>
            </header>
        </main>

    )

}