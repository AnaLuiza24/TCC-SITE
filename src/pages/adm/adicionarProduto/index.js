import './index.scss';
import CabecalhoAdm from '../../../components/cabecalhoADM';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { Categorias, Marcas, Adicionar, enviarImagemUm, enviarImagemDois, alterarProduto, buscaProdutoPorId, buscarImagem} from '../../../api/produtoApi';

export default function AdicionarProduto() {
    const [marcas, setMarcas] = useState([]);
    const [marca, setMarca] = useState(0);
    const [categorias, setCategorias] = useState([]);
    const [categoria, setCategoria] = useState(0);
    const [nome, setNome] = useState('');
    const [preco, setPreco] = useState();
    const [cor, setCor] = useState('');
    const [qtd, setQtd] = useState(0);
    const [desc, setDesc] = useState('');
    const [precoPromocao, setPrecoPromocao] = useState();
    const [imagem, setImagem] = useState();
    const [imagemDois, setImagemDois] = useState();
    const [id, setId] = useState(0);

    const { idParam } = useParams();

    function salvarCategoria(e) {
        const categoriaId = parseInt(e.target.value);
        setCategoria(categoriaId);
    }

    async function listarMarcas() {
        let r = await Marcas();
        setMarcas(r);
    }

    async function listarCategorias() {
        let r = await Categorias();
        setCategorias(r);
    }

    async function adicionar() {
        console.log("entrou");
        console.log(id);
        try {

            if (id === 0) {
                let novoProduto = await Adicionar(marca, categoria, nome, preco, cor, qtd, desc, precoPromocao);
                await enviarImagemUm(novoProduto.id, imagem);
                await enviarImagemDois(novoProduto.id, imagemDois);

                setId(novoProduto.id);
            } else {
                await alterarProduto(id, marca, categoria, nome, preco, cor, qtd, desc, precoPromocao);

                if(typeof (imagem) == 'object')
                await enviarImagemUm(id, imagem);

                if(typeof (imagemDois) == 'object')
                await enviarImagemDois(id, imagemDois);
            }

            toast('Produto cadastrado com sucesso!');

        } catch (err) {
            console.log(err);
            toast.error(err.response.data.erro)
            console.log(err.response.data.erro);
        }

    }

    async function carregarProduto() {
        let r = await buscaProdutoPorId(idParam);
        setMarca(r.idMarca);
        setCategoria(r.idCategoria);
        setNome(r.produto);
        setPreco(r.preco);
        setCor(r.cores);
        setQtd(r.qtd);
        setDesc(r.descri);
        setPrecoPromocao(r.promocao);

        setId(r.id);
        setImagem(r.img1);
        setImagemDois(r.img2);
    }

    function escolherImagem() {
        document.getElementById('produtoImagem').click();
    }
    function mostrarImagem() {
        if (typeof (imagem) == 'object') {
            return URL.createObjectURL(imagem);
        }
        else{
            return buscarImagem(imagem);
        }
    }

    //imagem dois
    function escolherImagemDois() {
        document.getElementById('produtoImagemDois').click();
    }

    function mostrarImagemDois() {
        if (typeof (imagemDois) == 'object') {
            return URL.createObjectURL(imagemDois);
        }
        else{
            return buscarImagem(imagemDois);
        }
    }

    function novo() {
        setId(0);
        setMarca(0);
        setCategoria(0);
        setNome('');
        setPreco('');
        setCor('');
        setQtd(0);
        setDesc('');
        setPrecoPromocao('');
        setImagem();
        setImagemDois();
    }

    useEffect(() => {
        listarMarcas();
        listarCategorias();
    }, [])

    useEffect(() => {
        if (idParam) {
            carregarProduto();
        }

    }, [])

    return (
        <main className='pagina-adicionar-produto'>
            <CabecalhoAdm />
            <header className='adicionar-produto-principal'>

                <section className='adicionar-produto-titulo'>
                    <img onClick={novo} style={{ cursor: "pointer" }} src='/assets/images/add.png' alt='adicionar' />
                    <h1> Adicionar um novo produto </h1>
                </section>

                <section className='adicionar-produto-desc'>
                    <h1>Nome e Descrição</h1>

                    <div>
                        <input id='nm-produto' type='text' placeholder='Nome do produto' value={nome} onChange={e => setNome(e.target.value)} />
                        <select value={marca} onChange={e => setMarca(e.target.value)}>
                            <option value={0}>Selecione</option>

                            {marcas.map(item => (
                                <option value={item.id}>{item.marca}</option>
                            ))}
                        </select>

                    </div>

                    <input placeholder='Descrição' type='text' value={desc} onChange={e => setDesc(e.target.value)} />

                    <div className='adicionar-produto-cod'>
                        <h1> Cor: </h1>
                        <input type='text' value={cor} onChange={e => setCor(e.target.value)} />
                    </div>
                </section>

                <section className='adicionar-produto-preco'>
                    <h1>Preço:</h1>

                    <div>
                        <div>
                            <h4>Preço de venda</h4>
                            <input type='text' placeholder='R$ 0,00' value={preco} onChange={e => setPreco(e.target.value)} />
                        </div>

                        <div>
                            <h4>Preço promocional</h4>
                            <input type='text' placeholder='R$ 0,00' value={precoPromocao} onChange={e => setPrecoPromocao(e.target.value)} />
                        </div>

                    </div>
                </section>

                <section className='adicionar-produto-imagem'>

                    <h1>Adicionar fotos:</h1>

                    <div className='produto-imagem-adicionar'>

                        <div onClick={escolherImagem}>

                            {!imagem &&
                                <img src="/assets/images/adicionar.png" alt="adicionar" />
                            }

                            {imagem &&
                                <img style={{ width: "150px" }} src={mostrarImagem()} alt='imagem' />
                            }

                            <input type='file' id='produtoImagem' onChange={e => setImagem(e.target.files[0])} />
                        </div>

                        <div onClick={escolherImagemDois}>
                            {!imagemDois &&
                                <img src="/assets/images/adicionar.png" alt="adicionar" />
                            }

                            {imagemDois &&
                                <img style={{ width: "150px" }} src={mostrarImagemDois()} alt='imagem-dois' />
                            }

                            <input type='file' id='produtoImagemDois' onChange={e => setImagemDois(e.target.files[0])} />
                        </div>


                    </div>

                    <div className='produto-imagem-qtd'>
                        <h1>Quantidade em estoque: </h1>
                        <input type='number' placeholder='00' value={qtd} onChange={e => setQtd(e.target.value)} />
                    </div>
                </section>

                <div className='adicionar-produto-tipo'>
                    <h1>Tipo de Produto: </h1>

                    <div>
                        {categorias.map(item => (
                            <div>
                                <input type='checkbox' value={item.id} onChange={salvarCategoria} checked={categoria === item.id} />
                                <p>{item.categoria}</p>
                            </div>
                        ))}

                    </div>
                </div>
                <div className='adicionar-produto-confirmar'>
                    <button style={{ cursor: "pointer" }} onClick={adicionar} >Adicionar</button> &nbsp; &nbsp;
                </div>

            </header>
        </main>
    )
}