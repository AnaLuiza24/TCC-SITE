import { useState } from 'react';
import Cabecalho from '../../../components/cabecalho';
import './index.scss';
import axios from 'axios';

export default function NewEndereco() {

    const [mostrar, setMostrar] = useState(false);
    const [addComp, setAddComp] = useState(false);
    const [nomeDest, setNomeDest] = useState('');
    const [CEP, setCEP] = useState('');
    const [descEndereco, setDescEndereco] = useState('');
    const [bairro, setBairro] = useState('');
    const [cidade, setCidade] = useState('');
    const [estado, setEstado] = useState('');
    const [numero, setNumeo] = useState('');
    const [complemento, setComplemento] = useState('');

    async function adicionarUm() {
        setMostrar(!mostrar);
    }
    async function adicionarComp() {
        setAddComp(!addComp);
    }

    async function adicionarEndereco(){
        let endereco ={
            destinatario: nomeDest,
            cep: CEP,
            desc: descEndereco,
            bairro: bairro,
            cidade: cidade,
            estado: estado,
            numero: numero,
            complemento: complemento
        }
        let r = await axios.post('http://localhost:5037/endereco', endereco);
        return r;
    }

    return (
        <main className='pagina-endereco'>
            <Cabecalho />

            <article className='pagina-endereco-container'>
                <section className='pagina-endereco-principal'>
                    <section className='endereco-um'>
                        <div className='endereco-um-titulo'>
                            <h1>Novo Endereço</h1>
                            <p><span style={{ color: "red", fontWeight: "bold" }}>*</span>Campos obrigatórios</p>
                        </div>

                        <div>
                            <p><span style={{ color: "red", fontWeight: "bold" }}>*</span>Nome do destinatário</p>
                            <input type='text' value={nomeDest} onChange={e => setNomeDest(e.target.value)}/>
                        </div>
                        <div>
                            <p>CPF (Opcional)</p>
                            <input type='text' />
                        </div>
                        <div>
                            <p>CEP</p>
                            <div>
                                <input style={{ width: "200px" }} type='text' value={CEP} onChange={e => setCEP(e.target.value)}/>
                                <a href='https://buscacepinter.correios.com.br/app/endereco/index.php'>Não sei meu cep</a>
                            </div>
                        </div>
                    </section>

                    {mostrar ?
                        <section className='endereco-dois'>
                            <div>
                                <p><span style={{ color: "red", fontWeight: "bold" }}>*</span>Endereço</p>
                                <input type='text' value={descEndereco} onChange={e => setDescEndereco(e.target.value)}/>
                            </div>

                            <div className='endereco-complemento'>
                                <p><span style={{ color: "red", fontWeight: "bold" }}>*</span>Número</p>
                                <div>
                                    <input style={{ width: "200px" }} type='text' value={numero} onChange={e => setNumeo(e.target.value)}/>
                                    {addComp ? <input style={{width: "290px"}} type='text' placeholder='Complemento' value={complemento} onChange={e => setComplemento(e.target.value)}/> : <span onClick={adicionarComp}>+ Adicionar complemento</span>}  
                                </div>
                            </div>

                            <div>
                                <p><span style={{ color: "red", fontWeight: "bold" }}>*</span>Bairro</p>
                                <input type='text' value={bairro} onChange={e => setBairro(e.target.value)}/>
                            </div>

                            <div>
                                <p><span style={{ color: "red", fontWeight: "bold" }}>*</span>Cidade</p>
                                <input type='text' value={cidade} onChange={e => setCidade(e.target.value)}/>
                            </div>

                            <div>
                                <p><span style={{ color: "red", fontWeight: "bold" }}>*</span>Estado</p>
                                <input type='text' value={estado} onChange={e => setEstado(e.target.value)}/>
                            </div>

                            <div>
                                <button style={{marginTop: "20px"}} onClick={adicionarEndereco}>Salvar</button>
                            </div>
                        </section>
                        :
                        <section className='endereco-dois'>
                            <div>
                                <button onClick={adicionarUm}>Salvar</button>
                            </div>
                        </section>
                        }
                </section>
            </article>
        </main>
    )
}