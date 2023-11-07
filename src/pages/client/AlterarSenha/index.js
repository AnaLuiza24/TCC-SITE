import Cabecalho from '../../../components/cabecalho';
import './index.scss';
import Rodape from '../../../components/rodape';
import CabecalhoLogado from '../../../components/cabecalho-logado';
import storage from 'local-storage'

export default function AlterarSenha(){

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
                                             Senha atual
                                            </label>
                                            <input type="password" id="campo-de-entrada" />

                                    </div>

                                    
                                    <div className="input-container">
                                        
                                        <label htmlFor="campo-de-entrada" className="input-title">
                                          Nova senha 
                                        </label>
                                        <input type="password" id="campo-de-entrada"  />

                                    </div>

                                    <div className="input-container">

                                            <label htmlFor="campo-de-entrada" className="input-title">
                                                Confirmar a senha
                                            </label>
                                            <input type="password" id="campo-de-entrada" />

                                    </div>

                                    <button>Alterar</button>
                                </div>


                            </div>

                            </div>


                    </div>


            
                    <div className='rodape'><Rodape/></div>
        </div>
    )
}