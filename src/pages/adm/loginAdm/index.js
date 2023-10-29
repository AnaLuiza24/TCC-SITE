import { useState, useRef } from 'react';
import {loginAdm} from '../../../api/admApi.js';
import { useNavigate } from 'react-router-dom';
import LoadingBar from 'react-top-loading-bar';
import storage from 'local-storage';
import CabecalhoAdm from '../../../components/cabecalhoADM';
import './index.scss';

export default function LoginAdm() {
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [erro, setErro] = useState('');
    const [carregando, setCarregando] = useState(false);

    const navigate = useNavigate();
    const ref = useRef();

    async function entrar() {
        ref.current.continuousStart();
        setCarregando(true);

        try {
            const r = await loginAdm(email, senha);
            storage('usuario-logado', r);

            setTimeout(() => {
                navigate('/adm');
            }, 2000);

        } catch (err) {
            ref.current.complete();
            setCarregando(false);
            if (err.response.status === 401) {
                setErro(err.response.data.erro);
            }
        }
    }


    return (
        <main className='pagina-loginAdm-principal'>
            <LoadingBar color="#0083ca" ref={ref} />
            <nav>
                <CabecalhoAdm />
            </nav>
            <section className='pagina-loginAdm'>
                <section>
                    <div className='login-titulo'>
                        <img src='./assets/images/loginsair.png' alt='loginSair' />
                        <h1>LOGIN DE ADMINISTRADOR</h1>
                    </div>

                    <div className='login-informacoes'>
                        <div>
                            <img src='./assets/images/email.png' alt='email' />
                            <input type='text' placeholder='E-mail' value={email} onChange={e => setEmail(e.target.value)} />
                        </div>
                        <div>
                            <img src='./assets/images/password.png' alt='password' />
                            <input type='password' placeholder='Senha' value={senha} onChange={e => setSenha(e.target.value)} />
                        </div>
                        <p>Esqueci minha senha</p>

                        <p style={{ color: "red", textDecoration: "none", alignSelf: "self-start", paddingLeft: "65px" }}>{erro}</p>
                    </div>

                    <div className='login-confirmar'>
                        <div>
                            <button onClick={entrar} disabled={carregando} >CONTINUAR</button>
                        </div>
                    </div>
                </section>

                <section>
                    <img id='lateral' src='./assets/images/tcc-admin 1.png' alt='lateral' />
                </section>

            </section>
        </main>
    )
}