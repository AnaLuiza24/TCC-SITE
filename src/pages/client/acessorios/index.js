import './index.scss';
import CabecalhoLogado from '../../../components/cabecalho-logado';
import CaixaProduto from '../../../components/caixaProduto';
import Menu from '../../../components/menu';
import Cabecalho from '../../../components/cabecalho';
import storage from 'local-storage';
import { buscarAcessoriosPorMarca, listarAcessorios } from '../../../api/produtoApi';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

export default function Acessorios() {
    const [produto, setProdutos] = useState([]);
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
            const r = await listarAcessorios();
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
            const r = await buscarAcessoriosPorMarca(id);
            setProdutos([...r]);
            console.log(r);

        }catch(err){
            if (err.response.status === 500) {
                setErro(err.response.data.erro);
            }
        }
    }


    return (
        <main className='pagina-principal-acessorios'>
            {storage('usuario-logado') ? <CabecalhoLogado /> : <Cabecalho/> }
            <header className='pagina-acessorios'>
                <section className='divisoria'>
                    <p> Home  Acessórios </p>
                </section>

                <section className='acessorios-menu'>
                    <Menu />

                    <article className='acessorios-vitrine'>
                        <div className='titulo-vitrine'>
                            <h1> Acessórios </h1>
                        </div>

                        <div className='produto-vitrine'>
                            <CaixaProduto info={produto}/>
                        </div>
                    </article>
                  
                </section>
            </header>
        </main>
    )
}