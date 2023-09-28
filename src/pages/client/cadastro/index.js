import { useState } from 'react';
import Cabecalho from '../../../components/cabecalho';
import './index.scss';
import { Link } from 'react-router-dom';
import axios from 'axios';

export default function Cadastro() {

    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [nasc, setNasc] = useState('');
    const [telefone, setTelefone] = useState('');
    const [confirmarSenha, setConfirmarSenha] = useState('');
    const [erro, setErro] = useState('');

    async function inserir() {
        try {
            if (senha === confirmarSenha || senha.length > 6) {
                let url = 'http://localhost:5037/adicionar/cliente';

                let pessoa = {
                    nome: nome,
                    email: email,
                    senha: senha,
                    nasc: nasc,
                    telefone: telefone
                }
                let r = await axios.put(url, pessoa)

                window.location.reload()
                return r;
            }

        } catch (err) {
            setErro(err.response.data.er)
        }

    }


    return (
        <main className='pagina-cadastro'>
            <Cabecalho />
            <header className='cadastro-principal'>
                <img src='./assets/images/bola-azul2.png' alt="Imagem Flutuante" id="floating-image" />

                <img src='./assets/images/bola-azul.png' alt="Imagem Flutuante" id="floating-image2" />


                <div className='imagem'>
                    <img src='./assets/images/cadastro.png' alt='cadastro' />

                </div>
                <div className='tabela-cadastro'>
                    <div className='titulo'>
                        <img src='./assets/images/loginsair.png' alt='login' />
                        <h1>CRIE SUA CONTA</h1>

                    </div>

                    <div className='tabela'>

                        <div className="input-container">
                            <label htmlFor="campo-de-entrada" className="input-title">
                                Nome completo
                            </label>
                            <input type="text" id="campo-de-entrada" onChange={e => setNome(e.target.value)} />
                        </div>

                        <div className='data-tel'>

                            <div className="input-container">
                                <label htmlFor="campo-de-entrada" className="input-title">
                                    Data de nascimento
                                </label>
                                <input type="date" id="campo-de-entrada" onChange={e => setNasc(e.target.value)} />
                            </div>

                            <div className="input-container">
                                <label htmlFor="campo-de-entrada" className="input-title">
                                    Telefone
                                </label>
                                <input type="text" id="campo-de-entrada" onChange={e => setTelefone(e.target.value)} />
                            </div>

                        </div>

                        <div className="input-container">
                            <label htmlFor="campo-de-entrada" className="input-title">
                                E-mail
                            </label>
                            <input type="text" id="campo-de-entrada" onChange={e => setEmail(e.target.value)} />

                        </div>

                        <div className="input-container">
                            <label htmlFor="campo-de-entrada" className="input-title">
                                Senha (min 6 caracteres)
                            </label>
                            <input type="password" id="campo-de-entrada" onChange={e => setSenha(e.target.value)} />

                        </div>

                        <div className="input-container">
                            <label htmlFor="campo-de-entrada" className="input-title">
                                Confirmar a senha
                            </label>
                            <input type="password" id="campo-de-entrada" onChange={e => setConfirmarSenha(e.target.value)}/>

                        </div>

                        <div>
                            {erro}
                        </div>



                    </div>
                    <div className='caixa'>
                        <div className='box'>


                            <input type="checkbox" /> <p>Li e aceito a <Link to='/' >Politica de privacidade</Link> do Grupo SmartSeven</p>

                        </div>

                        <div className='box'>

                            <input type="checkbox" /> <p>Receber informações de promoções via SMS</p>


                        </div>

                    </div>

                    <div className='botao'>
                        <button onClick={inserir}>Confirmar</button>
                    </div>

                </div>
            </header>
        </main>
    )
}