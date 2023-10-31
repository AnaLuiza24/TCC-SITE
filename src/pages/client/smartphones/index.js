import './index.scss';
import Cabecalho from '../../../components/cabecalho';
import CaixaProduto from '../../../components/caixaProduto';
import Menu from '../../../components/menu';
import { listarSmartphones } from '../../../api/produtoApi';
import { useState, useEffect } from 'react';

export default function Smartphones() {

    const [produtos, setProdutos] = useState([]);
    const [erro, setErro] = useState('');


    async function listarTodos(){
        try{
            const r = await listarSmartphones();
            setProdutos([...r]);

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
            <Cabecalho />
            <header className='pagina-smartphone'>
                <section className='divisoria'>
                    <p> Home - Smartphones </p>
                </section>

                <section className='smartphone-menu'>
                    <Menu />

                    <article className='smartphone-vitrine'>
                        <div className='titulo-vitrine'>
                            <h1> Smartphones </h1>
                        </div>

                        <div className='produto-vitrine'>
                            <CaixaProduto />
                        </div>
                    </article>
                </section>
            </header>
        </main>
    )
}