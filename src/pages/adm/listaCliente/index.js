import axios from 'axios';
import CabecalhoAdm from '../../../components/cabecalhoADM';
import './index.scss';
import { useState } from 'react';

export default function ListaCliente() {
    const [clientes, setClientes] = useState([]);

    async function buscar(){
        let url = 'http://localhost:5000/listar/cliente';
        let resp = await axios.get(url);
        setClientes([...resp.data]);

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
                        <input type='text' placeholder='Buscar por nome' />
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