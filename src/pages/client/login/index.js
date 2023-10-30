import Cabecalho from '../../../components/cabecalho';
import './index.scss';
import { Link } from 'react-router-dom';



export default function Login() {




    return (
        <main className='pagina-principal-login'>
            <Cabecalho />
        <section className='pagina-login'>
            <section>
                <div className='login-titulo'>
                    <img src='./assets/images/loginsair.png' alt='login'/>
                    <h1>LOGIN DE USUÁRIO</h1>
                </div>

                <div className='login-informacoes'>
                    <div>
                        <img src='./assets/images/email.png' alt='email'/>
                        <input type='text' placeholder='E-mail'/>
                    </div>
                    <div>
                        <img src='./assets/images/password.png' alt='password'/>
                        <input type='text' placeholder='Senha'/>
                    </div>
                    <p>Esqueci minha senha</p>
                </div>

                <div className='login-confirmar'>
                    <div>
                        <button >CONTINUAR</button>
                        <Link id='cadastro' to={'/cadastro'}> <p>Não tem uma conta? Cadastre-se agora</p></Link>
                    </div>

                    <div id='login-botao-google'>
                        <button><img src='./assets/images/google.png' alt='google'/> Continuar com Google</button>
                    </div>
                </div>
            </section>

            <section>
                <img id='lateral' src='./assets/images/lateralLogin.png' alt='lateral'/>
            </section>
            </section>
        </main>
    )
}