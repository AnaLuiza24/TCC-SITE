import './index.scss';
import CaixaProduto from '../../../components/caixaProduto';
import Menu from '../../../components/menu';
import Cabecalho from '../../../components/cabecalho';
import storage from 'local-storage';
import { buscarAcessoriosPorMarca, listarAcessorios, buscarPorProduto } from '../../../api/produtoApi';
import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Rodape from '../../../components/rodape';
import CabecalhoLogado from '../../../components/cabecalho-logado';

export default function Acessorios() {

    const [produtos, setProdutos] = useState([]);
    const [erro, setErro] = useState('');
    const termoDeBusca  = useParams();
    const [pagina, setPagina] = useState(1); 

    async function chamarProdutos () {
        const pesquisaProdutos = await buscarPorProduto(termoDeBusca.pesquisa, pagina);
        setProdutos(pesquisaProdutos);
        console.log(pesquisaProdutos); 
    }

    useEffect(() => {
       
    }, []);

    async function trocarPagina(pagina) {
     

        let r = await buscarPorProduto(termoDeBusca.pesquisa, pagina)
        setPagina(pagina);
        setProdutos(r);
    }

    const navigate = useNavigate();
    let { id } = useParams();

    useEffect(() => {
        if (id) {
            buscarPorId();
        }
        else {
            listarTodos();
        }
    }, [id])


    async function listarTodos() {
        try {
            const r = await listarAcessorios();
            setProdutos([...r]);
            console.log(r);

        } catch (err) {
            if (err.response.status === 500) {
                setErro(err.response.data.erro);
            }
        }
    }


    async function buscarPorId() {
        try {
            const r = await buscarAcessoriosPorMarca(id);
            setProdutos([...r]);
            console.log(r);

        } catch (err) {
            if (err.response.status === 500) {
                setErro(err.response.data.erro);
            }
        }
    }

    function abrirDetalhes(id) {
        navigate(`/detalhe-produto/${id}`);
    }


    useEffect(() => {
        listarTodos();
    }, [])


    return (
        <main className='pagina-principal-acessorios'>
            {storage('usuario-logado') ? <CabecalhoLogado /> : <Cabecalho />}
            <header className='pagina-acessorios'>
                <section className='divisoria'>
                </section>

                <section className='acessorios-menu'>
                    <Menu />

                    <article className='acessorios-vitrine'>
                        <div className='titulo-vitrine'>
                            <h1> Acessórios </h1>
                        </div>

                        <div className='produto-vitrine'>
                            {produtos.map(produto =>
                                <div onClick={() => abrirDetalhes(produto.id_produto)} style={{cursor:'pointer'}}>
                                    <CaixaProduto key={produto.id} info={produto} />
                                </div>
                            )}
                        </div>

                        {/* <div className='mais-itens-vitrine'>
                            <span onClick={() => trocarPagina(1)}>1</span>
                            <span onClick={() => trocarPagina(2)}>2</span>
                            <span onClick={() => trocarPagina(3)}>3</span>
                            <span onClick={() => trocarPagina(4)}>4</span>
                            <span onClick={() => trocarPagina(5)}>5</span>
                        </div> */}
                    </article>

                </section>
            </header>
            <Rodape />
        </main>
    )
}