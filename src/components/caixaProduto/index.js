import { api_url } from '../../constant.js';
import './index.scss';

export default function CaixaProduto(props) {

    let info = props.info;

    function formatarValorComVirgula(valor) {
        if (typeof valor === 'number') {
          return valor.toFixed(2).replace('.', ',');
        }
        return valor;
      }

      return (
        <main className='pagina-caixa-produto'>
          <header className='caixa-produto-principal'>
            <img alt='imagem' src={ api_url +info.img1} />
    
            <h5>{info.produto}</h5>
            <div>
              <p id='preco-original'>R${formatarValorComVirgula(info.preco)}</p>
            </div>
    
            <p id='preco-promocao'>R${formatarValorComVirgula(info.promocao)}</p>
    
            <p style={{fontSize: "12px", fontWeight: "normal"}}>
              Ou até em R${formatarValorComVirgula(info.promocao)} em 10x de R${formatarValorComVirgula(info.promocao/10)} sem juros
            </p>
          </header>
        </main>
      );
}