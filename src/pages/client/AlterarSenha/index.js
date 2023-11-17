import Cabecalho from '../../../components/cabecalho';
import './index.scss';
import Rodape from '../../../components/rodape';
import CabecalhoLogado from '../../../components/cabecalho-logado';
import storage from 'local-storage';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { alterarSenha } from '../../../api/usuarioApi';


export default function AlterarSenha(){
  
    const usuario = storage('usuario-logado')
    const [senhaAtual, setsenhaAtual] = useState('');
    const [senha, setSenha] = useState('');
    const [confirmarSenha, setConfirmarSenha] = useState('');
    const [erro, setErro] = useState('');
    const navigate = useNavigate();

    
    async function alterar() {
        try {
            const id = usuario.id;

            if (senha === confirmarSenha || senha.length > 6) {

                const r = await alterarSenha(senha, id)
                navigate('/login');
                alert('alterado')
            }
        } catch (err) {
            setErro(err.response.data.er)
            alert(err.response.data.er)
        }

    }



    return(
        <div className='pagina-Alterar'>
               <div className='cabecalho'>
               {storage('usuario-logado') ? <CabecalhoLogado /> : <Cabecalho/> }
                </div>
               
                    <div className='corpo'>
                            <div className='textos'>

                            <h1>MINHA CONTA</h1>
                            <h2>Informações Pessoais</h2>

                            </div>
                            <div className='parte2'>
                            <div className='caixa'>
                                <p>Use o formulário a seguir para alterar a senha de sua conta</p>

                                <div className='conteudo'>

                                     <div className="input-container">

                                            <label htmlFor="campo-de-entrada" className="input-title">
                                            Senha Atual
                                            </label>
                                            <input type="password" id="campo-de-entrada" onChange={e => setsenhaAtual(e.target.value)} />

                                    </div>

                                    
                                    <div className="input-container">
                                        
                                        <label htmlFor="campo-de-entrada" className="input-title">
                                          Nova senha 
                                        </label>
                                        <input type="password" id="campo-de-entrada" onChange={e => setSenha(e.target.value)} />

                                    </div>

                                    <div className="input-container">

                                            <label htmlFor="campo-de-entrada" className="input-title">
                                                Confirmar a senha
                                            </label>
                                            <input type="password" id="campo-de-entrada" onChange={e => setConfirmarSenha(e.target.value)}/>

                                    </div>

                                    <button onClick={alterar}>Alterar</button>
                                </div>


                            </div>

                            </div>


                    </div>


            
                    <div className='rodape'><Rodape/></div>
        </div>
    )
}