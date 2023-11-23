import Cabecalho from "../../../components/cabecalho";
import CabecalhoLogado from "../../../components/cabecalho-logado";
import Rodape from "../../../components/rodape";
import './index.scss';
import storage from 'local-storage';
import CaixaProduto from '../../../components/caixaProduto';
import Menu from '../../../components/menu';
import { Link, Navigate, useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { buscarPorProduto } from "../../../api/produtoApi.js";

export  default function Buscar(){

    const [produtos, setProdutos] = useState([]);
    const termoDeBusca  = useParams();
    const [pagina, setPagina] = useState(1); 

    async function chamarProdutos () {
        const pesquisaProdutos = await buscarPorProduto(termoDeBusca.pesquisa, pagina);
        setProdutos(pesquisaProdutos);
        console.log(pesquisaProdutos); 
    }

    useEffect(() => {
        chamarProdutos();

        //eslint-disable-next-line
    }, []);

    async function trocarPagina(pagina) {
        let r = await buscarPorProduto(termoDeBusca.pesquisa, pagina)
        setPagina(pagina);
        setProdutos(r);
    }

    const navigate = useNavigate();

    function abrirDetalhes(id){
        navigate(`/detalhe-produto/${id}`);
    }

    return(
        <main className="pagina-principal-produtos">
            {storage('usuario-logado') ? <CabecalhoLogado /> : <Cabecalho />}
            <header className="pagina-produtos">
                <section className="divisoria">
                </section>

                <section className="produtos-menu">
                    <Menu />

                    <article className="produtos-vitrine">
                        <div className="titulo-vitrine">
                            <h1> Produtos </h1>
                        </div>

                        <div className="produto-individual-vitrine">
                            {produtos.map(produto => 
                                <div onClick={() => abrirDetalhes(produto.id_produto)} style={{cursor: "pointer"}}>
                                    <CaixaProduto key={produto.id} info={produto} />
                                    </div>
                                )}
                        </div>

                        <div className='mais-itens-vitrine'>
                            <Link to={`/produto/busca/${pagina}`}><span onClick={() => trocarPagina(1)}>1</span></Link>
                            <Link to={`/produto/busca/${pagina}`}><span onClick={() => trocarPagina(2)}>2</span></Link>
                            <Link to={`/produto/busca/${pagina}`}><span onClick={() => trocarPagina(3)}>3</span></Link>
                            <Link to={`/produto/busca/${pagina}`}><span onClick={() => trocarPagina(4)}>4</span></Link>
                            <Link to={`/produto/busca/${pagina}`}><span onClick={() => trocarPagina(5)}>5</span></Link>
                        </div>
                    </article>
                </section>
            </header>
            <Rodape />
        </main>
    )
}

