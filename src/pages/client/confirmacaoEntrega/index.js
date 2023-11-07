import './index.scss'
import CabecalhoLogado from '../../../components/cabecalho-logado';
import Cabecalho from '../../../components/cabecalho';
import Rodape from '../../../components/rodape'
import { Link } from 'react-router-dom'
import storage from 'local-storage';

export default function Confirmacao(){
    return(
        <main className='pagina-confirmacao'>
             {storage('usuario-logado') ? <CabecalhoLogado /> : <Cabecalho/> }

            <header className='confirmacao-principal'>
                <aside className='entrega'>
                    <h1>Endereço de entrega</h1>

                    <div className='endereco'>
                        <img src='/assets/images/local.png' alt='local'/>
                        
                        <div id='INFO'>
                            <p>AV. CEL. OCTAVIANO DE FREITAS COSTA, 463  JD VELEIROS SÃO PAULO-SP</p>
                            <p> 04773-000</p>
                            <p> Gustavo S. Texeira</p>
                        </div>

                    </div>

                    <div className='troca'>
                        <img src='/assets/images/troca.png' alt='troca'/>
                        <p>Trocar endereço</p>
                    </div>
                    
                    <div id='entre'>
                        <h1 >Estimativa de entrega</h1>   
                        
                    </div>

                    <div className='receba'>
                        <img src='/assets/images/caminhao.png' alt='camminhao'/>
                        <p>Receba <b>até 7 dias uteis</b> </p>
                    </div>
                </aside>
                
                <aside className='smartphone'>
                    <h1>Resumo do pedido</h1>

                    <div className='iphone'>
                        <img src='assets/images/iphone.png' alt='item'/>

                        <p>Apple iPhone 13 Meia-Noite <br></br> 5G 128GB 6GB RAM</p>

                    </div>

                    <div className='iphone'>
                        <img src='/assets/images/iphone2.png' alt='item'/>

                        <p>Apple iPhone 14 Pro Roxo-Profundo 128GB 6GB RAM </p>
                    </div>

                    <hr></hr>

                    <div className='pr'>
                        <p>Produto</p>
                        
                        <div>
                            <p>R$ 4.249,00</p>
                            <p>R$ 7.879,00</p>

                        </div>
                    </div>

                    <div className='frete'>
                        <div className='frets'>   
                            <p>Frete</p>
                            <p>Total</p>
                        </div>
                        
                        <div>
                            <p id='gr' ><strong>grátis</strong></p>
                            <p>R$ 12.128,00</p>   
                        </div>
                    </div>

                   <div className='link'>
                        <Link>Continuar o pagamento</Link>
                   </div>
                </aside>
            </header>
            
            <Rodape/>
        </main>
    )
}