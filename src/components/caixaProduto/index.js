import './index.scss';

export default function CaixaProduto(props) {

    let info = props.info;
    return (
        <main className='pagina-caixa-produto'>
            <header className='caixa-produto-principal'>
                <img alt='imagem' src={info.img1} />

                <h5>{info.produto}</h5>
                <div>
                    <p id='preco-original'>{info.preco}</p>
                </div>

                <p id='preco-promocao'>{info.promocao}</p>


            </header>
        </main>
    )
}