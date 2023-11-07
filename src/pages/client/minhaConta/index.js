import './index.scss';
import CabecalhoLogado from '../../../components/cabecalho-logado';
import Rodape from '../../../components/rodape';
import { Link } from 'react-router-dom';
import Cabecalho from '../../../components/cabecalho';
import storage from 'local-storage';


export default function Conta() {
    return (
        <main className='pagina-conta'>
             {storage('usuario-logado') ? <CabecalhoLogado /> : <Cabecalho/> }

            <header className='principal-conta'>
                <h1>MINHA CONTA</h1>

                <section className='conta-itens'>

                    <Link className='conta-card' to={'/rastrear'}>
                    
                        <div className='conta-imagem'>
                            <img src='/assets/images/pedidos.png' alt='pedidos' />
                        </div>
                        <div className='conta-info'>
                            <h2>Meu Pedido</h2>

                            <p>Rastrear meu pedido</p>
                        </div>
                    
                    </Link>


                    <Link className='conta-card' to={'/alterar-dados'}>

                        <div className='conta-imagem'>
                            <img src='/assets/images/info.png' alt='info'/>
                        </div>
                        <div className='conta-info'>
                            <h2>Informações Pessoais </h2>

                            <p>Altere suas informações como e-mail, telefone</p>
                        </div>
                    
                    </Link>


                    <Link className='conta-card' to={'/alterar-senha'}>
                
                        <div className='conta-imagem'>
                            <img src='/assets/images/senha.png' alt='senha' />
                        </div>
                        <div className='conta-info'>
                            <h2>Alterar Senha</h2>

                            <p>Altere sua senha com segurança</p>
                        </div>
                    
                    </Link>
                </section>
            </header>

            <Rodape />

        </main>
    )
}