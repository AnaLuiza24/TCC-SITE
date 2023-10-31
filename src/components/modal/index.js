import { Link } from "react-router-dom";
import './index.scss';


export default function Modal({ isOpen, setOpen }) {

    if (isOpen) {
        return (
            <main className='pagina-modal'>
                <header className="modal">
                    <div className='qua'>
                        <p> Para ver seus pedidos e ter uma <br /> experiência personalizada, acessse <br /> sua conta.</p>
                        <Link to={'/login'}> <button id="blue"> Login </button> </Link>
                        <Link to={'/cadastro'}> <button id="white"> Cadastra-se </button> </Link>

                    </div>

                    <hr></hr>

                    <div className="qua-invi">
                        
                    </div>

                </header>

            </main>
        )
    } else {
        return <></>
    }
}