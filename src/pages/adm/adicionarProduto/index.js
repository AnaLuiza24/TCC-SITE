import './index.scss';
import axios from 'axios';
import CabecalhoAdm from '../../../components/cabecalhoADM';
import { useEffect, useState } from 'react';

export default function AdicionarProduto() {
    const [marcas, setMarcas] = useState([]);
    const [marca, setMarca] = useState(0);
    const [categorias, setCategorias] = useState([]);
    const [categoria, setCategoria] = useState(0);
    const [nome, setNome] = useState('');
    const [preco, setPreco] = useState('');
    const [cor, setCor] = useState('');
    const [qtd, setQtd] = useState('');
    const [desc, setDesc] = useState('');
    const [precoPromocao, setPrecoPromocao] = useState('');

    async function adicionarProduto() {
        let produto = {
            marca: marca,
            categoria: categoria,
            nome: nome,
            preco: preco,
            cor: cor,
            qtd: qtd,
            desc: desc,
            precopromo: precoPromocao
        }
        let r = await axios.post('http://localhost:5037/produto', produto);
        setMarca(0);
        setCategoria(0);
        setNome('');
        setPreco('');
        setCor('');
        setQtd('');
        setDesc('');
        setPrecoPromocao('');
    }

    async function adicionarDetalhe(){

        let r = await axios.post('http://localhost:5037/detalhe');

    }

    async function listarMarcas() {
        let r = await axios.get('http://localhost:5037/marcas/listar');
        setMarcas(r.data);
    }

    async function listarCategorias() {
        let r = await axios.get('http://localhost:5037/categoria/listar');
        setCategorias(r.data);

        console.log(categoria);
    }

    function salvarCategoria(e) {
        const categoriaId = parseInt(e.target.value);
            setCategoria(categoriaId);
    }

    useEffect(() => {
        listarMarcas();
        listarCategorias();
    }, [])

    return (
        <main className='pagina-adicionar-produto'>
            <CabecalhoAdm />
            <header className='adicionar-produto-principal'>

                <section className='adicionar-produto-titulo'>
                    <img src='/assets/images/add.png' alt='adicionar' />
                    <h1> Adicionar um novo produto </h1>
                </section>

                <section className='adicionar-produto-desc'>
                    <h1>Nome e Descrição</h1>

                    <div>
                        <input id='nm-produto' type='text' placeholder='Nome do produto' value={nome} onChange={e => setNome(e.target.value)}/>
                        <select value={marca} onChange={e => setMarca(e.target.value)}>
                            <option value={0}>Marca</option>

                            {marcas.map(item => (
                                <option value={item.id}>{item.marca}</option>
                            ))}
                        </select>

                    </div>

                    <input placeholder='Descrição' type='text' value={desc} onChange={e => setDesc(e.target.value)}/>

                    <div className='adicionar-produto-cod'>
                        <h1> Cor: </h1>
                        <input type='text' value={cor} onChange={e => setCor(e.target.value)}/>
                    </div>
                </section>

                <section className='adicionar-produto-preco'>
                    <h1>Preço:</h1>

                    <div>
                        <div>
                            <h4>Preço de venda</h4>
                            <input type='text' placeholder='R$ 0,00' value={preco} onChange={e => setPreco(e.target.value)}/>
                        </div>

                        <div>
                            <h4>Preço promocional</h4>
                            <input type='text' placeholder='R$ 0,00' value={precoPromocao} onChange={e => setPrecoPromocao(e.target.value)}/>
                        </div>

                    </div>
                </section>

                <section className='adicionar-produto-imagem'>

                    <h1>Adicionar fotos:</h1>

                    <div className='produto-imagem-adicionar'>
                        <button> <img src='/assets/images/adicionar.png' alt='adicionar' /> </button>
                        <button> <img src='/assets/images/adicionar.png' alt='adicionar' /> </button>
                        <button> <img src='/assets/images/adicionar.png' alt='adicionar' /> </button>
                    </div>

                    <div className='produto-imagem-qtd'>

                        <h1>Quantidade em estoque: </h1>
                        <input type='number' placeholder='00' value={qtd} onChange={e => setQtd(e.target.value)}/>

                    </div>
                </section>

                <div className='adicionar-produto-tipo'>
                    <h1>Tipo de Produto: </h1>



                    <div>
                        {categorias.map(item => (
                            <div key={item.id}>
                                <input type='checkbox' value={item.id} onChange={salvarCategoria} checked={categoria === item.id} />
                                <p>{item.categoria}</p>
                            </div>
                        ))}

                    </div>
                </div>

                <div className='adicionar-produto-detalhe'>
                    <div>
                        <h1>Tipo de detalhe: </h1>
                        <input type='text' />
                    </div>

                    <div className='descricao'>
                        <h1>Descrição do detalhe: </h1>
                        <input type='text' />
                    </div>

                    <div className='adicionar-produto-confirmar'>
                        <button style={{cursor: "pointer"}} onClick={adicionarProduto}>Adicionar</button>
                    </div>
                </div>

            </header>
        </main>
    )
}