import './index.scss';
import { Link, useNavigate } from 'react-router-dom';
import ModalAdm from '../modalAdm';
import storage from 'local-storage';
import { useEffect, useState } from 'react';

export default function CabecalhoAdm(){

    const [usuario, setUsuario] = useState('');
    const [Open, setOpen] = useState(false);
    const navigate = useNavigate();

    console.log("🚀 ~ file: index.js:7 ~ l:", Open);

    useEffect(() => {
        if(!storage('usuario-logado')) {
            navigate('/login-Adm');
        }
        else{
            const usuarioLogado = storage('usuario-logado');
            setUsuario(usuarioLogado.nome)
        }

    }, [])

    return(
        <main className='pagina-cabecalho-adm'>
            <header>
                <section className='cabecalho-adm-um'>
                    <Link to={'/adm'}>
                    <img src='./assets/images/logo.png' alt='logo' id='logo' />
                    </Link>

                    <div className='busca'>
                        <input type='text' placeholder='Busca' />
                        <img src='./assets/images/lupa.png' alt='lupa'/>
                    </div>

                    <div>
                    <Link id='login-adm' to={'/adm'}>
                    <img src='./assets/images/userCabecalho.png' alt='userCabecalho' id='user'/>
                    </Link>
                        <img onClick={() => setOpen(!Open)} src='./assets/images/seta.png' alt='seta' />
                        <ModalAdm isOpen={Open} setOpen={setOpen} usuario={usuario}/>
                    </div>
                </section>

                <section className='cabecalho-adm-dois'>
                    <Link id='home' to={'/adm'}>Home</Link>
                    <Link id='produto' to={'/lista-produto'}>Produto</Link>
                    <Link id='cliente' to={'/lista-cliente'}>Clientes</Link>
                    <Link id='pedido' to={'/lista-pedido'}>Listas de Pedidos</Link>
                </section>
            </header>
        </main>
    )
}