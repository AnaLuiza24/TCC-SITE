import Cabecalho from '../../../components/cabecalho';
import './index.scss';
import Rodape from '../../../components/rodape';
import CabecalhoLogado from '../../../components/cabecalho-logado';
import storage from 'local-storage';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { alterarCliente } from '../../../api/usuarioApi';


export default function AlterarDados() {

    const usuario = storage('usuario-logado')
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [nascimento, setNascimento] = useState('');
    const [telefone, setTelefone] = useState('');
    const [erro, setErro] = useState('');
    const navigate = useNavigate();

    const id = usuario.id;

    async function alterar() {
        try {
            const r = await alterarCliente(nome, email, nascimento, telefone, id);
            navigate('/login');
            alert('alterado');


        } catch (err) {
            setErro(err.response.data.er)
            alert(err.response.data.er)
        }

    }

    return (
        <main className='pagina-dados'>
            {storage('usuario-logado') ? <CabecalhoLogado /> : <Cabecalho />}

            <header className='corpo'>

                <div className='textos'>
                    <h1>MINHA CONTA</h1>
                    <h2>Informações clienteis</h2>
                </div>

                <div className='parte2'>

                    <div className='caixa'>

                        <div className='conteudo'>

                            <div className="input-container">
                                <label htmlFor="campo-de-entrada" className="input-title">
                                    Nome completo
                                </label>
                                <input type="text" id="campo-de-entrada" onChange={e => setNome(e.target.value)} />
                            </div>

                            <div className="input-container">
                                <label htmlFor="campo-de-entrada" className="input-title">
                                    E-mail
                                </label>
                                <input type="text" id="campo-de-entrada" onChange={e => setEmail(e.target.value)} />

                            </div>

                            <div className='row'>

                                <div className="input-containers">
                                    <label htmlFor="campo-de-entrada" className="input-title">
                                        Data de nascimento
                                    </label>
                                    <input type="date" id="campo-de-entrada" onChange={e => setNascimento(e.target.value)} />
                                </div>

                                <div className="input-containers">
                                    <label htmlFor="campo-de-entrada" className="input-title">
                                        Telefone
                                    </label>
                                    <input type="number" id="campo-de-entrada" onChange={e => setTelefone(e.target.value)} />
                                </div>


                            </div>
                            <button onClick={alterar}>Alterar</button>
                        </div>


                    </div>

                </div>

            </header>
            <Rodape />
        </main>
    )
}