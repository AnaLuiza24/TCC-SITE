import Cabecalho from '../../../components/cabecalho';
import CabecalhoLogado from '../../../components/cabecalho-logado';
import Rodape from "../../../components/rodape";
import './index.scss';
import storage from 'local-storage'

export default function AtendimentoCliente() {
    return(
        <main className='pagina-atendimentoCliente'>
            {storage('usuario-logado') ? <CabecalhoLogado /> : <Cabecalho/> }
            <section>
                <p></p>
                <div className="principal-atendimento">
                    <div>
                        <h1>ATENDIMENTO AO CLIENTE</h1>
                        <hr></hr>
                    </div>

                    <div>
                        <p id='sub-titulo'>Entre em contato conosco</p>

                        <p>Abaixo listamos as formas de contato disponíveis com a SmartSeven. Estamos ansiosos em lhe atender da melhor maneira possível.</p>
                    </div>

                    <div>
                        <p id='topicos'>Central de atendimento ao cliente</p>
                        <p>(11)98765-4321</p>
                    </div>

                    <div>
                        <p id='topicos'>Atendimento online</p>
                        <p>Entre em contato com nossos vendedores e tire suas dúvidas no Fale Conosco.</p>
                    </div>

                    <div>
                        <p id='topicos'>Horário de atendimento</p>
                        <p>Segunda à Sexta-Feiras: 9h às 18h.</p>
                    </div>

                    <div>
                        <p id='topicos'>E-mail</p>
                        <p>Entre em contato conosco através do e-mail sac@smartseven.com.br</p>
                    </div>
                </div>
            </section>
            <Rodape />
        </main>
    )
}