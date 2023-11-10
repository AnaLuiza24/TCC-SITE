import { useNavigate } from "react-router-dom";
import './index.scss';
import storage from 'local-storage';
import { confirmAlert } from 'react-confirm-alert';
import { Link, useLocation } from 'react-router-dom';


export default function ModalLogado({ isOpen, setOpen, usuario }) {

    const navigate = useNavigate();


    function SairDaConta() {
 
        confirmAlert(
            {
                title: 'Sair da conta ?',
                message: `Deseja sair da conta  ? `,
                buttons: [
                    {
                        label:'Sim',
                        onClick: async () => {
                           
                                storage.remove('usuario-logado')
                                setTimeout(() => {
                                    navigate('/login')
                                }, 1800)

                        }
                    },
    
                    {
                        label: 'Não'
                    }
                ]
             } 
          )
         }


    if (isOpen) {
        return (
            <main className='pagina-modal'>
                <header className="modal">
                    <div className='qua'>
                        <div className="usuario">
                        <span> {usuario} </span>

                            <div className="minha-conta">
                                <p> {usuario} </p>
                                <Link to={'/minha-conta'}>   <button> MINHA CONTA </button></Link>
                            </div>
                        </div>

                        <Link to={'/rastrear'}>      <button> MEUS PEDIDOS </button> </Link>

                    </div>

                    <hr></hr>

                    <div className="qua-invi">
                        <div className="logar" onClick={SairDaConta} style={{cursor: "pointer"}}>
                            <img src="./assets/images/desligar.png" alt="sair" />
                            <p> LOG OUT </p>
                        </div>

                    </div>

                </header>

            </main>
        )
    } else {
        return <></>
    }
}