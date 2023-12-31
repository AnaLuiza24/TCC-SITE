import './index.scss'
import CabecalhoLogado from '../../../components/cabecalho-logado';
import Rodape from '../../../components/rodape'
import { Link } from 'react-router-dom'
import Cabecalho from '../../../components/cabecalho';
import storage from 'local-storage';

export default function Rastrear(){

    return(

        <main className='pagina-rastrear'>
            <div className='cabecalho'>  {storage('usuario-logado') ? <CabecalhoLogado /> : <Cabecalho/> } </div>

            <div className='container'>
                <div className='caixa'>
                    <div className='cima'>
                         <div className='endereco'>
                            <img src='/assets/images/local.png' alt='local'/>
                                
                                <div id='INFO'>
                                    <p>AV. CEL. OCTAVIANO DE FREITAS COSTA, 463  JD VELEIROS SÃO PAULO-SP</p>
                                    <p> 04773-000</p>
                                    <p id='mudar'></p>

                                    <Link to={'https://rastreamento.correios.com.br/app/index.php'}>Rastrear Pedido</Link>
                                </div>

                        </div>

                        <div className='pedido'>
                        <aside className='smartphone'>
                    <h1>Pedido</h1>

                    <div className='iphone'>
                        <img src='assets/images/iphone.png' alt='item'/>

                        <p>Apple iPhone 13 Meia-Noite 5G 128GB 6GB RAM </p>

                    </div>

                    <div className='iphones'>
                        <img src='/assets/images/iphone2.png' alt='item'/>

                        <p>Apple iPhone 14 Pro Roxo-Profundo 128GB 6GB RAM </p>
                    </div>

                    <hr></hr>

                    <div className='pr'>
                        <p>Total</p>
                        
                        <div>

                            <p>R$ 12.128,00</p>

                        </div>
                    </div>

                </aside>    

                        </div>

                    </div>

                    <div className='progressbar'>

                    </div>

                </div>
            </div>

            <div className='rodape'> <Rodape/>  </div>

        </main>
    )
}
