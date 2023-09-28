import Cabecalho from '../../../components/cabecalho';
import CaixaProduto from '../../../components/caixaProduto';
import Rodape from '../../../components/rodape';
import './index.scss';

export default function LandingPage() {
    return(
        <main className='pagina-inicial'>
            <Cabecalho />
            <header className='inicial-principal'>
                <section className='inicial-carrossel'>

                </section>

                <section className='inicial-opcoes'>
                    <div>
                        <img alt='celular' src='./assets/images/opcoes-celular.png' />
                        <img alt='carregador' src='./assets/images/opcoes-carreg.png' />
                    </div>
                    <div>
                        <img alt='fones' src='./assets/images/opcoes-fone.png' />
                        <img alt='capinha' src='./assets/images/opcoes-capinha.png' />
                    </div>
                </section>

                <section className='inicial-mais-vendidos'>
                    <div>
                        <h1>Mais vendidos - Mensalmente</h1>
                        <hr />
                    </div>

                    <div>
                        <CaixaProduto />
                    </div>
                </section>

                <section className='inicial-itens'>
                    <div className='itens-box'>
                        <div>
                            <img alt='itens' src='./assets/images/caixa.png' />
                        </div>

                        <div className='itens-box-text'>
                            <h4>Frete Grátis</h4>
                            <p>Envio rápido e seguro com código de rastreio via Correios.</p>
                        </div>
                    </div>

                    <div className='itens-box'>
                        <div>
                            <img alt='itens' src='./assets/images/reembolso.png' />
                        </div>

                        <div className='itens-box-text'>
                            <h4>Satisfação ou Reembolso</h4>
                            <p>Caso você não fique satisfeito, nós devolvemos o seu dinheiro em até 7 dias.</p>
                        </div>
                    </div>

                    <div className='itens-box'>
                        <div>
                            <img alt='itens' src='./assets/images/suporte.png' />
                        </div>

                        <div className='itens-box-text'>
                            <h4>Suporte Profissional</h4>
                            <p>Equipe de suporte de extrema qualidade para atender de Segunda a Sábado das 9:00 ás 18:00.</p>
                        </div>
                    </div>

                    <div className='itens-box'>
                        <div>
                            <img alt='itens' src='./assets/images/compra-segura.png' />
                        </div>

                        <div className='itens-box-text'>
                            <h4>Compra Segura</h4>
                            <p>Ambiente fortemente seguro para pagamentos no cartão de Crédito e Débito.</p>
                        </div>
                    </div>
                </section>

                <section className='inicial-fale-conosco'>
                    <h1>FALE CONOSCO</h1>

                    <input type='text' placeholder='Nome*' id='fale-conosco-completo'/>

                    <div>
                        <input type='text' placeholder='Telefone*' id='fale-conosco-pequeno'/>
                        <input type='text' placeholder='E-mail*' id='fale-conosco-pequeno'/>
                    </div>

                    <input type='text' placeholder='Escreva seu problema ou suas sugestões' id='fale-conosco-completo'/>

                    <div className='inicial-fale-conosco-button'>
                        <button>ENVIAR</button>
                    </div>
                </section>
            </header>
            <Rodape />
        </main>
    )
}