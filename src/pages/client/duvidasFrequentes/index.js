import Cabecalho from "../../../components/cabecalho";
import Rodape from "../../../components/rodape";
import './index.scss';

export default function DuvidasFrequentes() {
    return (
        <main className='pagina-duvidasFrequentes'>
            <Cabecalho />
            <section>
                <p></p>
                <div className='principal-duvidas'>
                    <div>
                        <h1>DÚVIDAS FREQUENTES</h1>
                        <hr></hr>
                    </div>

                    <div>
                        <p id="sub-titulo"> A SmartSeven é confiável?</p>

                        <p>Gostaríamos de reiterar que a segurança dos seus dados e informações pessoais é uma das nossas principais prioridades. Temos total comprometimento em garantir que seus dados sejam mantidos em segurança e que nenhum dado seja utilizado fora do nosso site.
                        Por isso, podem ficar tranquilos ao comprar em nosso site SmartSeven, sabendo que seus dados e informações pessoais estão seguros e protegidos.Agradecemos pela preferência e estamos sempre à disposição para atender aos nossos clientes da melhor forma possível.
                        </p>

                    </div>

                    <div>
                    <p id="sub-titulo"> O produto que estou comprando é de boa qualidade? Como posso ter certeza?</p>

                    <p>Gostaríamos de tranquilizá-lo quanto à qualidade dos produtos que vendemos em nosso site. Todos os nossos produtos são selecionados cuidadosamente e provenientes de fornecedores confiáveis e qualificados. Além disso, todos produtos são testados antes do envio e garantimos que eles atendem aos padrões de qualidade exigidos para um bom funcionamento.</p>
                    </div>

                    <div>
                    <p id="sub-titulo"> Frete e Rastreio</p>

                    <p>Assim que um pedido é entregue aos Correios, enviamos automaticamente uma notificação em seu e-mail cadastrado no site, informando o código de rastreio do seu pedido. Este código mostra o caminho que se produto percorreu, registrando suas movimentações até a entrega no endereço cadastrado.
                    Como outra opção, você pode também acompanhar seu pedido em nosso site. Para isso, basta clicar em “Minha Conta”, acessá-la através de seu Login e senha e irá visualizar a opção “Meu pedido”. Nesta janela você íra clicar em     "Rastrear Pedido" e terá todas as informações referentes ao trajeto percorrido de sua compra.
                    </p>
                    </div>

                    <div>
                    <p id="sub-titulo"> Condições de Pagamento</p>

                    <p> Na SmartSeven você pode efetuar o pagamento das suas compras em apenas 2 maneiras:</p>
                    </div>
                    
                </div>
            </section>
        </main>
    )

}