import Cabecalho from '../../../components/cabecalho';
import './index.scss';
import Rodape from '../../../components/rodape';
import CabecalhoLogado from '../../../components/cabecalho-logado';
import storage from 'local-storage'

export default function AlterarDados() {

    return (
        <main className='pagina-dados'>
            {storage('usuario-logado') ? <CabecalhoLogado /> : <Cabecalho/> }

            <header className='corpo'>

                <div className='textos'>
                    <h1>MINHA CONTA</h1>
                    <h2>Informações Pessoais</h2>
                </div>

                <div className='parte2'>

                    <div className='caixa'>

                        <div className='conteudo'>

                            <div className="input-container">
                                <label htmlFor="campo-de-entrada" className="input-title">
                                    Nome completo
                                </label>
                                <input type="text" />
                            </div>

                            <div className="input-container">
                                <label htmlFor="campo-de-entrada" className="input-title">
                                    E-mail
                                </label>
                                <input type="text" />

                            </div>

                            <div className='row'>

                                <div className="input-containers">
                                    <label htmlFor="campo-de-entrada" className="input-title">
                                        Data de nascimento
                                    </label>
                                    <input type="date" id="campo-de-entrada" />
                                </div>

                                <div className="input-containers">
                                    <label htmlFor="campo-de-entrada" className="input-title">
                                        Telefone
                                    </label>
                                    <input type="text" />
                                </div>


                            </div>
                            <button>Alterar</button>
                        </div>


                    </div>

                </div>

            </header>
            <Rodape />
        </main>
    )
}