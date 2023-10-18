import Cabecalho from '../../../components/cabecalho';
import './index.scss';

export default function Pagamento() {
  return (
    <main className='pagina-pagamento'>
      <div className='Cabecalho'>
      <Cabecalho/>
      </div>

        <div className='tudo'>
            <div className='esquerda'>
              <div className='esq'>
                
                <div className='textos'>
                  <h1>Estamos quase lá... </h1>
                  <h1>Preencha a forma de pagamento</h1>
                </div>
            </div>

            <div className='esq2'>
                  <div className='tipos'>
                    <img src='/assets/images/cartao.png'/>
                    <select>
                      <option>Tipo de Cartão</option>
                      <option>Débito</option>
                      <option>Crédito</option>
                    </select>
                  </div>

                  <div className='tipos2'>
                    <input type='text' placeholder='Nome idêntico ao do cartão'/>
                  </div>

                  <div className='tipos3'>
                    <input className='nr' type='text' placeholder='Numero do cartão'/>
                    <input className='MM' type='text' placeholder='MM/YY'/>
                    <input className='CVV' type='text' placeholder='CVV'/>
                  </div>

                  <div className='butao'>
                    <button>Finalizar Compra</button>
                  </div>

                  <div className='seguro'>
                    <img src='/assets/images/escudo.png'/>
                    <h6>Pagamento Seguro</h6>
                  </div>

            </div>
          </div>

          <div className='direita'>

            <div className='quadrado'>
              <div className='resumo'>
                <h2>Resumo do pedido</h2>
              </div>
            </div>

          </div>
        </div> 
    </main>
  );
}