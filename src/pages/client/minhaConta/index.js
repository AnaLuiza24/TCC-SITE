import './index.scss';
import Cabecalho from '../../../components/cabecalho';


export default function Conta() {
    return (
        <main className='pagina-conta'>
            <Cabecalho />

            <header className='principal-conta'>
                <h1>MINHA CONTA</h1>

                <section className='conta-itens'>
                    <div>
                        <div>
                            <img src='/assets/images/pedidos.png' alt='pedidos' />
                        </div>
                        <div>
                            <h2>Meus Pedidos</h2>

                            <p>Rastrear pedidos ou comprar produtos novamente</p>
                        </div>
                    </div>

                    <div>
                        <div>
                            <img src='/assets/images/info.png' alt='info'/>
                        </div>
                        <div>
                            <h2>Informações Pessoais </h2>

                            <p>Altere suas informações como e-mail, telefone</p>
                        </div>
                    </div>

                    <div>
                        <div>
                            <img src='/assets/images/senha.png' alt='senha' />
                        </div>
                        <div>
                            <h2>Alterar Senha</h2>

                            <p>Altere sua senha com segurança</p>
                        </div>
                    </div>
                </section>
            </header>


        </main>
    )
}