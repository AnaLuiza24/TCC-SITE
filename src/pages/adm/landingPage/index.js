import { Link } from 'react-router-dom';
import CabecalhoAdm from '../../../components/cabecalhoADM';
import './index.scss';

export default function LandingPageADM() {
    return (
        <main className='pagina-inicial-adm'>
            <CabecalhoAdm />
            <header>
                <section className='inicial-adm-um'>
                    <Link>
                        <img alt='vendas' src='/assets/images/crescimento.png' style={{width: '35px'}}/>
                        <h4>Vendas</h4>
                    </Link>

                    <Link to={'/adm/produto/cadastrar'}>
                        <img alt='produtos' src='/assets/images/etiqueta.png' style={{width: '30px'}}/>
                        <h4>Cadastro de Produtos</h4>
                    </Link>

                    <Link>
                        <img alt='entregas' src='/assets/images/entrega.png' style={{width: '40px'}}/>
                        <h4>Lista de Pedidos</h4>
                    </Link>
                </section>


                <section className='inicial-adm-dois'>
                <h1>Smart Seven: visão geral</h1>
                    <div className='inicial-adm-dois-principal'>
                        
                        <div className='inicial-adm-card'>
                            <div>
                                <h4>Vendas</h4>
                                <p>0</p>
                            </div>

                            <div>
                                <p>Mesmo período anterior</p>
                                <p>0</p>
                            </div>

                            <div>
                                <p>Mesmo período</p>
                                <p>0.0%</p>
                            </div>
                        </div>

                        <div className='inicial-adm-card'>
                            <div>
                                <h4>Receitas</h4>
                                <p>0</p>
                            </div>

                            <div>
                                <p>Mesmo período anterior</p>
                                <p>0</p>
                            </div>

                            <div>
                                <p>Mesmo período</p>
                                <p>0.0%</p>
                            </div>
                        </div>

                        <div className='inicial-adm-card'>
                            <div>
                                <h4>Cancelamentos</h4>
                                <p>0</p>
                            </div>

                            <div>
                                <p>Mesmo período anterior</p>
                                <p>0</p>
                            </div>

                            <div>
                                <p>Mesmo período</p>
                                <p>0.0%</p>
                            </div>
                        </div>
                    </div>
                </section>
            </header>
        </main>
    )
}