import { useState } from 'react';
import Cabecalho from '../../../components/cabecalho';
import './index.scss';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Rodape from '../../../components/rodape';

export default function AlterarDados() {

    return(
        <main className='pagina-dados'>
            <div className='cabecalho'><Cabecalho/></div>

            <div className='corpo'>

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
                                <input type="text"  placeholder='Kauan Matias' id="campo-de-entrada"/>
                            </div>

                            <div className="input-container">
                                <label htmlFor="campo-de-entrada" className="input-title">
                                    E-mail
                                </label>
                                <input type="text" placeholder='thiago@gmail.com' id="campo-de-entrada"/>

                            </div>

                            <div className='row'>

                            <div className="input-containers">
                                <label htmlFor="campo-de-entrada" className="input-title">
                                    Data de nascimento
                                </label>
                                <input type="date" id="campo-de-entrada"/>
                            </div>

                            <div className="input-containers">
                                <label htmlFor="campo-de-entrada" className="input-title">
                                    Telefone
                                </label>
                                <input type="text"  placeholder='(11)12345-6789' id="campo-de-entrada"/>
                            </div>


                            </div>
                            <button>Alterar</button>
                        </div>


                    </div>

                </div>

            </div>

            <div className='rodape'><Rodape/></div>
        </main>
    )
}