import './index.scss';
import { Link } from 'react-router-dom';

export default function Cabecalho() {
    return (
        <main className='pagina-cabecalho'>
            <header>
                <section className='cabecalho-um'>
                    <Link to={'/'}>
                        <img src='./assets/images/logo.png' alt='logo' id='logo' />
                    </Link>

                    <div className='busca'>
                        <input type='text' placeholder='Busca' />
                        <img src='./assets/images/lupa.png' alt='lupa' />
                    </div>

                    <div className='cabecalho-itens'>
                        <img src='./assets/images/carrinho.png' alt='carrinho' id='carrinho' />
                        <div className='cabecalho-login'>
                            <img src='./assets/images/userCabecalho.png' alt='userCabecalho' id='user' />
                            <img src='./assets/images/seta.png' alt='seta' />
                        </div>
                    </div>
                </section>

                <section className='cabecalho-dois'>
                    <Link id='home' to={'/'}>Home</Link>
                    <Link>Smartphones</Link>
                    <Link>Acessórios</Link>
                    <a href='#inicial-fale-conosco'>Fale conosco</a>
                </section>
            </header>
        </main>
    )
}