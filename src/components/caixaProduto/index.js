import { mostrarImagem } from '../../api/produtoApi.js';
import { api_url } from '../../constant.js';
import './index.scss';

export default function CaixaProduto(props) {
  const info = props.info;
  const uniqueId = `produto-${info.id}`; 

  function formatarValorComVirgula(valor) {
    if (typeof valor === 'number') {
      return valor.toFixed(2).replace('.', ',');
    }
    return valor;
  }

  return (
    <main className='pagina-caixa-produto' id={uniqueId} >
      <header className='caixa-produto-principal'>
        <img alt='imagem' src={mostrarImagem(info.img1)} />

        <h5>{info.produto}</h5>
        <div className='nome-produto'>
          <p> {info.nome} </p>
        </div>

        <div>
          <p id='preco-original'>R${formatarValorComVirgula(info.preco *1)}</p>
        </div>

        <p id='preco-promocao'>R${formatarValorComVirgula(info.promocao *1)}</p>

        <p style={{ fontSize: "12px", fontWeight: "normal" }}>
          Ou até em R${formatarValorComVirgula(info.promocao *1)} em 10x de R${formatarValorComVirgula(info.promocao / 10)} sem juros
        </p>
      </header>
    </main>
  );
}
