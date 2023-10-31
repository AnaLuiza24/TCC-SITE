import { Link } from "react-router-dom";
import './index.scss';


export default function Modal({ isOpen, setOpen }) {

    if (isOpen) {
        return (
            <main className='pagina-modal'>
                <header className="modal">
                    <div className='qua'>
                        <div className="usuario">
                            <img src=""/>

                            <div className="minha-conta">
                                <p> AdmLindo123 </p>
                                <button> MINHA CONTA </button>
                            </div>
                        </div>

                        <button>
                            <img src=""/>
                            <p> ADICIONAR ADM </p>
                        </button>

                    </div>

                    <hr></hr>

                    <div className="qua-invi">
                        <div className="logar">
                            <img src="" />
                            <p> LOG OUT </p>
                        </div>


                        <img src="" />

                    </div>

                </header>

            </main>
        )
    } else {
        return <></>
    }
}