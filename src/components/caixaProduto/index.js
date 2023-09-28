import './index.scss';

export default function CaixaProduto() {
    return (
        <main className='pagina-caixa-produto'>
            <header className='caixa-produto-principal'>
                <img alt='imagem' src='' />

                <h5>Apple iPhone 14 Pro Roxo-Profundo 128GB 6GB RAM </h5>
                <div>
                    <p>R$8.799,00</p>
                </div>
                
                <p id='preco-promocao'>R$ 7.879,00</p>

                <div>
                    <p id='desc-parcelas'>ou até em R$8799,00 em 10x de R$879,90 sem juros</p>
                </div>
            </header>
        </main>
    )
}