import { useNavigate } from "react-router-dom";
import './index.scss';
import storage from 'local-storage';


export default function ModalAdm({ isOpen, setOpen, usuario }) {

    const navigate = useNavigate();

    function sair() {
        storage.remove('usuario-logado');
        navigate('/login-Adm');
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

                        <button> ADICIONAR ADM </button>

                    </div>

                    <hr></hr>

                    <div className="qua-invi">
                        <div className="logar" onClick={sair} style={{cursor: "pointer"}}>
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