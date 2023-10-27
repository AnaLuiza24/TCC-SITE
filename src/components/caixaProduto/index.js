import './index.scss';

export default function CaixaProduto() {
    return (
        <main className='pagina-caixa-produto'>
            <header className='caixa-produto-principal'>
                <img alt='imagem' src='/assets/images/phone.png' />

                <h5>Samsung Galaxy A23 Preto 128GB 4GB RAM </h5>
                <div>
                    <p id='preco-original'>R$ 1.140,00</p>
                </div>

                <p id='preco-promocao'>R$ 1.000,00</p>


            </header>
        </main>
    )
}