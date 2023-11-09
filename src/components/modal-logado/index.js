import { useNavigate } from "react-router-dom";
import './index.scss';
import storage from 'local-storage';
import { confirmAlert } from 'react-confirm-alert';


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
                            <span> {usuario.charAt(0)} </span>

                            <div className="minha-conta">
                                <p> {usuario} </p>
                                <button> MINHA CONTA </button>
                            </div>
                        </div>

                        <button> MEUS PEDIDOS </button>

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