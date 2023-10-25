import './index.scss';
import Cabecalho from '../../../components/cabecalho';
import Rodape from '../../../components/rodape';
import { Link } from 'react-router-dom';


export default function Conta() {
    return (
        <main className='pagina-conta'>
            <Cabecalho />

            <header className='principal-conta'>
                <h1>MINHA CONTA</h1>

                <section className='conta-itens'>

                    <Link>
                    <div className='conta-card'>
                        <div className='conta-imagem'>
                            <img src='/assets/images/pedidos.png' alt='pedidos' />
                        </div>
                        <div className='conta-info'>
                            <h2>Meus Pedidos</h2>

                            <p>Rastrear pedidos ou comprar produtos novamente</p>
                        </div>
                    </div>
                    </Link>


                    <Link to={'/alterar-dados'}>
                    <div className='conta-card'>
                        <div className='conta-imagem'>
                            <img src='/assets/images/info.png' alt='info'/>
                        </div>
                        <div className='conta-info'>
                            <h2>Informações Pessoais </h2>

                            <p>Altere suas informações como e-mail, telefone</p>
                        </div>
                    </div>
                    </Link>


                    <Link to={'/alterar-senha'}>
                    <div className='conta-card'>
                        <div className='conta-imagem'>
                            <img src='/assets/images/senha.png' alt='senha' />
                        </div>
                        <div className='conta-info'>
                            <h2>Alterar Senha</h2>

                            <p>Altere sua senha com segurança</p>
                        </div>
                    </div>
                    </Link>
                </section>
            </header>

            <Rodape />

        </main>
    )
}