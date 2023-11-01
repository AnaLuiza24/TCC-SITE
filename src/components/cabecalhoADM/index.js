import './index.scss';
import { Link } from 'react-router-dom';
import ModalAdm from '../modalAdm';
import { useState } from 'react';

export default function CabecalhoAdm(){

    const [Open, setOpen] = useState(false);

    console.log("🚀 ~ file: index.js:7 ~ l:", Open);

    return(
        <main className='pagina-cabecalho-adm'>
            <header>
                <section className='cabecalho-adm-um'>
                    <Link to={'/inicial-Adm'}>
                    <img src='./assets/images/logo.png' alt='logo' id='logo' />
                    </Link>

                    <div className='busca'>
                        <input type='text' placeholder='Busca' />
                        <img src='./assets/images/lupa.png' alt='lupa'/>
                    </div>

                    <div>
                    <Link id='login-adm' to={'/login-Adm'}>
                    <img src='./assets/images/userCabecalho.png' alt='userCabecalho' id='user'/>
                    </Link>
                        <img onClick={() => setOpen(!Open)} src='./assets/images/seta.png' alt='seta' />
                        <ModalAdm isOpen={Open} setOpen={setOpen} />
                    </div>
                </section>

                <section className='cabecalho-adm-dois'>
                    <Link id='home' to={'/inicial-Adm'}>Home</Link>
                    <Link id='produto' to={'/lista-produto'}>Produto</Link>
                    <Link id='cliente' to={'/lista-cliente'}>Clientes</Link>
                    <Link id='pedido' to={'/lista-pedido'}>Listas de Pedidos</Link>
                </section>
            </header>
        </main>
    )
}