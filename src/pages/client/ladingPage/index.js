import Cabecalho from '../../../components/cabecalho';
import FaleConosco from '../../../components/faleConosco';
import Rodape from '../../../components/rodape';
import './index.scss';
import { Swiper, SwiperSlide } from 'swiper/react'
import storage from 'local-storage';
import CabecalhoLogado from '../../../components/cabecalho-logado';

export default function LandingPage() {

    const data = [
        { id: '1', image: '/assets/images/banner_figma.png' },
        { id: '2', image: '/assets/images/Banner.png' },
        { id: '3', image: '/assets/images/banner_tcc.png' },

    ]

    return (
        <main className='pagina-inicial'>
            {storage('usuario-logado') ? <Cabecalho /> : <CabecalhoLogado /> }
            <header className='inicial-principal'>
                <section className='inicial-carrossel'>
                    <Swiper
                        slidesPerView={1}
                        pagination={{ clickable: true }}
                        navigation
                        autoplay={{ delay: 2000 }}
                    >

                        {data.map((item) => (
                            <SwiperSlide key={item.id}>
                                <img
                                    src={item.image}
                                    alt="Slider"
                                    className="slide-item"
                                />

                            </SwiperSlide>

                        ))}

                    </Swiper>
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

                <FaleConosco />
            </header>
            <Rodape />
        </main>
    )
}