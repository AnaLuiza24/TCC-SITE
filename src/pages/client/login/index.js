import Cabecalho from '../../../components/cabecalho';
import './index.scss';
import { Link } from 'react-router-dom';
import axios from 'axios';
import storage from 'local-storage'
import {toast} from 'react-toastify'

import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useRef } from 'react';




export default function Login() {

    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [erro, setErro] = useState('');
    const [carregando, setCarregando] = useState(false);
  
    const navigate = useNavigate();
    const ref = useRef();
  
    async function entrar() {
        if (ref.current && ref.current.continuousStart) {
          ref.current.continuousStart();
        }
        console.log('oi');
        setCarregando(true);
        setErro('');
      
        let user = {
          email: email,
          senha: senha
        }
      
        try {
          const response = await axios.post('http://localhost:5037/login', user);
            console.log(response);
          setTimeout(() => {
            storage('carrinho', []);
            storage('usuario-logado', response.data);
            navigate('/home');
          }, 1700)
        } catch (err) {
          if (ref.current && ref.current.complete) {
            ref.current.complete();
          }
          if (err.response) {
             toast.error(err.response.data.erro);
           } else {
         }
        toast.error(err.message);
        } finally {
          setCarregando(false);
        }
      }
      
  
    function teclaEnter(e) {
      if (e.key === 'Enter') {
          entrar();
    }
  }


    return (
        <main className='pagina-principal-login'>
            <Cabecalho />
        <section className='pagina-login'>
            <section className='conteudo'>
                <div className='login-titulo'>
                    <img src='/assets/images/loginsair.png' alt='login'/>
                    <h1>LOGIN DE USUÁRIO</h1>
                </div>

                <div className='login-informacoes'>
                    <div>
                        <img src='/assets/images/email.png' alt='email'/>
                        <input type='text' placeholder='E-mail'   value={email}
                             onChange={e => setEmail(e.target.value)}/>
                    </div>
                    <div>
                        <img src='/assets/images/password.png' alt='password'/>
                        <input type='password' placeholder='Senha'  value={senha}
                            onChange={e => setSenha(e.target.value)} 
                            onKeyUp={teclaEnter}/>
                    </div>
                    <Link id='alterar senha' to={'/alterar-senha'}> <p>Esqueci minha senha</p></Link> 
                </div>

                <div className='login-confirmar'>
                    <div>
                        <button  onClick={entrar}>CONTINUAR</button>
                        <Link id='cadastro' to='/cadastro'> <p>Não tem uma conta? Cadastre-se agora</p></Link>
                    </div>

                    <div id='login-botao-google'>
                        <button><img src='/assets/images/google.png' alt='google'/> Continuar com Google</button>
                    </div>
                </div>
            </section>

            <section>
                <img id='lateral' src='/assets/images/lateralLogin.png' alt='lateral'/>
            </section>
            </section>
        </main>
    )
}