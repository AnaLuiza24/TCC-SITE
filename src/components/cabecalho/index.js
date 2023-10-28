import './index.scss';
import { Link } from 'react-router-dom';
import AnchorLink from 'react-anchor-link-smooth-scroll'

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
                     <Link id='carrinho' to={'/'}>  <img src='./assets/images/carrinho.png' alt='carrinho' id='carrinho' /></Link> 
                        <div className='cabecalho-login'>
                        <Link id='login' to={'/login'}>   <img src='./assets/images/userCabecalho.png' alt='userCabecalho' id='user' /> </Link> 
                            <img src='./assets/images/seta.png' alt='seta' />
                        </div>
                    </div>
                </section>

                <section className='cabecalho-dois'>
                    <Link id='home' to={'/'}>Home</Link>
                    <Link id='smartphone' to={'/smartphones'}>Smartphones</Link>
                    <Link id='acessorios' to={'/acessorios'}>Acessórios</Link>
                    <AnchorLink href='#fale-conosco'>Fale conosco</AnchorLink>
                </section>
            </header>      
        </main>
    ) 
    
}
