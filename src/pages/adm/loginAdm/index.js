import { useState } from 'react';
import CabecalhoAdm from '../../../components/cabecalhoADM';
import './index.scss';
import axios from 'axios';

export default function LoginAdm() {
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    async function Buscar() {
        let r = await axios.get('http://localhost:5037/consultar?email='+email+'&senha='+senha);
        return r;
        
    }


    return (
        <main className='pagina-loginAdm-principal'>
            <nav>
                <CabecalhoAdm/>
            </nav>
        <section className='pagina-loginAdm'>
            <section>
                <div className='login-titulo'>
                    <img src='./assets/images/loginsair.png' alt='loginSair'/>
                    <h1>LOGIN DE ADMINISTRADOR</h1>
                </div>

                <div className='login-informacoes'>
                    <div>
                        <img src='./assets/images/email.png' alt='email'/>
                        <input type='text' placeholder='E-mail' onChange={e => setEmail(e.target.value)}/>
                    </div>
                    <div>
                        <img src='./assets/images/password.png' alt='password'/>
                        <input type='text' placeholder='Senha' onChange={e => setSenha(e.target.value)}/>
                    </div>
                    <p>Esqueci minha senha</p>
                </div>

                <div className='login-confirmar'>
                    <div>
                        <button onClick={Buscar}>CONTINUAR</button>
                    </div>
                </div>
            </section>

            <section>
                <img id='lateral' src='./assets/images/tcc-admin 1.png' alt='lateral'/>
            </section>

            </section>
        </main>
    )
}