import './index.scss';
import CabecalhoAdm from '../../../components/cabecalhoADM';

export default function AdicionarProduto() {
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
                    <input id='nm-produto' type='text' placeholder='Nome do produto' />
                    <select>
                        <option>Marca</option>
                    </select>

                    </div>

                    <input placeholder='Descrição' type='text' />

                    <div className='adicionar-produto-cod'>
                        <h1> Código do Produto: </h1>
                        <input type='text' />
                    </div>
                </section>

                <section className='adicionar-produto-preco'>
                    <h1>Preço:</h1>

                    <div>
                        <div>
                            <h4>Preço de venda</h4>
                            <input type='text' placeholder='R$ 0,00' />
                        </div>

                        <div>
                            <h4>Preço promocional</h4>
                            <input type='text' placeholder='R$ 0,00' />
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
                        <input type='text' placeholder='00' />

                    </div>
                </section>

                <div className='adicionar-produto-tipo'>
                    <h1>Tipo de Produto: </h1>

                    <div>
                        <div>
                            <input type='checkbox' />
                            <p>Smartphones</p>
                        </div>

                        <div>
                            <input type='checkbox' />
                            <p>Acessórios</p>
                        </div>
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
                        <button>Adicionar</button>
                    </div>
                </div>

            </header>
        </main>
    )
}