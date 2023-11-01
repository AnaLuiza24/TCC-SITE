import { Link } from "react-router-dom";
import './index.scss';



export default function ModalAdm({ isOpen, setOpen }) {

    if (isOpen) {
        return (
            <main className='pagina-modal'>
                <header className="modal">
                    <div className='qua'>
                        <div className="usuario">
                            <img src="./assets/images/FotoUser.png"/>

                            <div className="minha-conta">
                                <p> AdmLindo123 </p>
                                <button> MINHA CONTA </button>
                            </div>
                        </div>

                        <button>
                             MEUS PEDIDOS
                        </button>

                    </div>

                    <hr></hr>

                    <div className="qua-invi">
                        <div className="logar">
                            <img src="./assets/images/desligar.png" />
                            <p> LOG OUT </p>
                        </div>


                        <img src="./assets/images/configuracoes.png" />

                    </div>

                </header>

            </main>
        )
    } else {
        return <></>
    }
}