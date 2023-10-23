import './index.scss'
import Cabecalho from '../../../components/cabecalho'
import Rodape from '../../../components/rodape'
import { Link } from 'react-router-dom'

export default function Confirmacao(){
    return(
        <main className='pagina-confirmacao'>
            <Cabecalho/>

            <header className='confirmacao-principal'>
                <aside className='entrega'>
                    <h1>Endereço de entrega</h1>

                    <div className='endereco'>
                        <img src='/assets/images/local.png'/>
                        
                        <div id='INFO'>
                            <p>AV. CEL. OCTAVIANO DE FREITAS COSTA, 463  JD VELEIROS SÃO PAULO-SP</p>
                            <p> 04773-000</p>
                            <p> Gustavo S. Texeira</p>
                        </div>

                    </div>

                    <div className='troca'>
                        <img src='/assets/images/troca.png'/>
                        <p>Trocar endereço</p>
                    </div>

                    <h1>Estimativa de entrega</h1>

                    <div>
                        <img></img>
                        <p>Receba <b>até 7 dias uteis</b> </p>
                    </div>
                </aside>
                
                <aside>
                    <h1>Resumo do pedido</h1>

                    <div>
                        <img></img>

                        <p>Apple iPhone 13 Meia-Noite <br></br> 5G 128GB 6GB RAM</p>

                    </div>

                    <div>
                        <img></img>

                        <p>Apple iPhone 14 Pro Roxo-Profundo 128GB 6GB RAM </p>
                    </div>

                    <hr></hr>

                    <div>
                        <p>Produto</p>
                        
                        <div>
                            <p>R$ 4.249,00</p>
                            <p>R$ 7.879,00</p>

                        </div>
                    </div>

                    <div>
                        <p>Frete</p>
                        <p>Total</p>
                        
                        <div>
                            <p>grátis</p>
                            <p>R$ 12.128,00</p>   
                        </div>
                    </div>

                    <Link>Continuar o pagamento</Link>
                </aside>
            </header>
            
            <Rodape/>
        </main>
    )
}