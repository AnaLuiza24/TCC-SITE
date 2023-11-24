import './index.scss';
import { Link, useLocation } from 'react-router-dom';
import AnchorLink from 'react-anchor-link-smooth-scroll'
import { useState, useEffect } from 'react';
import Modal from '../modal';

export default function Cabecalho() {
    const [termoDeBusca, setTermoDeBusca] = useState('');
    const [contactHome, setContactHome] = useState(true);
    const [Open, setOpen] = useState(false);

    console.log("🚀 ~ file: index.js:7 ~ l:", Open);

    const location = useLocation();

    const handleKeyPress = (event) => {
        if (event.key === 'Enter') {
            realizarBusca(); // Chame sua função de busca aqui
        }
    };
    const realizarBusca = () => {
        // Sua lógica de busca aqui
        console.log('Termo de busca:', termoDeBusca);
    };


    const handleFaleConcosoClick = () => {
        const urlAtual = location.pathname;
        if (urlAtual !== '/') {
            setContactHome(false)
        }
    }

    useEffect(() => {
        handleFaleConcosoClick()
    }, [])

    return (
        <main className='pagina-cabecalho'>
            <header>
                <section className='cabecalho-um'>
                    <Link to={''}>
                        <img src='/assets/images/logo.png' alt='logo' id='logo' />
                    </Link>

                    <div className='busca'>
                        <input
                            type="text"
                            value={termoDeBusca}
                            onChange={(e) => setTermoDeBusca(e.target.value)}
                            onKeyPress={handleKeyPress}
                            placeholder='Buscar'
                        />
                        <img src='/assets/images/lupa.png' alt='lupa' />
                    </div>

                    <div className='cabecalho-itens'>
                        <Link id='carrinho' to={'/carrinho'}>  <img src='/assets/images/carrinho.png' alt='carrinho' id='carrinho' /></Link>
                        <div className='cabecalho-login'>
                            
                        <div className='divisor'>
                                <img src='/assets/images/userCabecalho.png' alt='userCabecalho' id='user' />
                                <div className='sep'>
                                    <img onClick={() => setOpen(!Open)} src='/assets/images/seta.png' alt='seta' id='seta' />
                                    <Modal isOpen={Open} setOpen={setOpen} />
                                </div>
                                
                            </div>
                        
                        </div>
                    </div>
                </section>

                <section className='cabecalho-dois'>
                    <Link id='home' to={'/'}>Home</Link>
                    <Link id='smartphone' to={'/smartphones'}>Smartphones</Link>
                    <Link id='acessorios' to={'/acessorios'}>Acessórios</Link>
                    {
                        contactHome ?
                            <AnchorLink href='#fale-conosco'>Fale conosco</AnchorLink>
                            :
                            <Link to={'/sobre-nos'} >Fale conosco</Link>
                    }
                </section>
            </header>
        </main>
    )
}