import './index.scss';
import CabecalhoLogado from '../../../components/cabecalho-logado';
import CaixaProduto from '../../../components/caixaProduto';
import Menu from '../../../components/menu';
import { buscarSmartphonesPorMarca, listarSmartphones } from '../../../api/produtoApi';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Cabecalho from '../../../components/cabecalho';
import storage from 'local-storage';
import Rodape from '../../../components/rodape';

export default function Smartphones() {

    const [produtos, setProdutos] = useState([]);
    const [erro, setErro] = useState('');

    let { id } = useParams();

    useEffect(() => {
        if (id) {
            buscarPorId();
        }
        else {
            listarTodos();
        }
    }, [id])

    async function listarTodos(){
        try{
            const r = await listarSmartphones();
            setProdutos([...r]);
            console.log(r);

        }catch(err){
            if (err.response.status === 500) {
                setErro(err.response.data.erro);
            }
        }
    }

    async function buscarPorId(){
        try{
            const r = await buscarSmartphonesPorMarca(id);
            setProdutos([...r]);
            console.log(r);

        }catch(err){
            if (err.response.status === 500) {
                setErro(err.response.data.erro);
            }
        }
    }

    useEffect(() => {
        listarTodos();
    }, [])

    return (
        <main className='pagina-principal-smartphone'>
             {storage('usuario-logado') ? <CabecalhoLogado /> : <Cabecalho/> }
            <header className='pagina-smartphone'>
                <section className='divisoria'>
                </section>

                <section className='smartphone-menu'>
                    <Menu />

                    <article className='smartphone-vitrine'>
                        <div className='titulo-vitrine'>
                            <h1> Smartphones </h1>
                        </div>

                        <div className='produto-vitrine'>
                            {produtos.map(produto => 
                                <CaixaProduto info={produto}/>   
                            )}
                        </div>
                    </article>
                </section>
            </header>
            < Rodape />
        </main>
    )
}