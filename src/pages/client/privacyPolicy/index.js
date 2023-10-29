import Cabecalho from '../../../components/cabecalho';
import Rodape from '../../../components/rodape';
import './index.scss';

export default function PrivacyPolicy() {
    return (
        <main className='pagina-politicaPrivacidade'>
            <Cabecalho />
            <section>
                <p></p>
                <div className='principal-politica'>
                    <div>
                        <h1>POLÍTICA DE PRIVACIDADE</h1>
                        <hr></hr>
                    </div>

                    <p>A Smart Seven é uma empresa dedicada a fornecer dispositivos móveis inovadores e serviços relacionados . A privacidade dos nossos clientes é de extrema importância para nós. Esta Política de Privacidade descreve como coletamos, usamos, compartilhamos e protegemos suas informações pessoais ao utilizar nossos produtos e serviços.</p>
                </div>

                <div>
                    <h4>Sumário</h4>
                </div>

                <div className='itens-politica'>
                    <h4>1. Informações Que Coletamos</h4>

                    <div>
                        <p><span>1.1 Informações Pessoais:</span> Coletamos informações pessoais, como nome, endereço de e-mail, número de telefone, endereço residencial e informações de pagamento, quando você compra nossos produtos, registra uma conta ou utiliza nossos serviços.</p>
                    </div>

                    <div>
                        <p><span>1.2 Informações do Dispositivo:</span> Coletamos informações técnicas sobre o dispositivo que você utiliza para acessar nossos serviços, incluindo o modelo, sistema operacional, identificadores únicos e informações de rede.</p>
                    </div>

                    <div>
                        <p><span>1.3 Uso dos Serviços:</span> Coletamos informações sobre como você utiliza nossos produtos e serviços, incluindo registros de atividades, interações com o dispositivo e preferências de uso.</p>
                    </div>
                </div>

                <div className='itens-politica'>
                    <h4>2. Uso das Informações</h4>

                    <div>
                        <p><span>2.1 Fornecimento de Produtos e Serviços:</span> Utilizamos suas informações para processar pedidos, entregar produtos, oferecer suporte ao cliente e melhorar nossos serviços.</p>
                    </div>
                </div>
            </section>
            <Rodape />
        </main>
    )
}