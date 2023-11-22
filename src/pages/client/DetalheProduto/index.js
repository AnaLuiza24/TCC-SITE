import "./index.scss";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import CabecalhoLogado from '../../../components/cabecalho-logado';
import Cabecalho from "../../../components/cabecalho";
import Rodape from '../../../components/rodape';
import Storage from "local-storage";
import { buscaProdutoPorId, mostrarImagem } from '../../../api/produtoApi';


export default function Detalhe() {
	const navigate = useNavigate();
	const [image, setImage] = useState('');
	const [produto, setProduto] = useState({});

	const { id } = useParams();

	function formatarValorComVirgula(valor) {
		if (typeof valor === 'number') {
		  return valor.toFixed(2).replace('.', ',');
		}
		return valor;
	  }

	useEffect(() =>{
		CarregarProduto();
	}, [])

	async function CarregarProduto() {
		let r = await buscaProdutoPorId(id);
		setProduto(r);
		console.log(r);
	}

	return (
		<main className="pagina-detalhe-produto">
			{Storage('usuario-logado') ? <CabecalhoLogado /> : <Cabecalho />}
			<header className="Content">
				<div className="Main-card">
					<div className="Card">
			
						<div className="Product">
							{" "}
							{/* Div parte do produto */}
							<div className="Product-image">
								{" "}
								{/* Div parte do produto/imagem */}
								<img className="example" src={mostrarImagem(produto.img1)} />
								<div className="Other-images">
									<img src={produto.img1}
										onClick={() => {
											setImage(mostrarImagem(produto.img1));
										}} />

									<img src={mostrarImagem(produto.img2)}
										onClick={() => {
											setImage(mostrarImagem(produto.img2));
										}} />
								</div>
							</div>
							<div className="Product-informations">
								<div className="div-title">
									<h1>{produto.produto}</h1>
								</div>
								<div className="div-price">
									<span className="old-price">
										<s>R$ {formatarValorComVirgula(produto.preco *1)}</s>
									</span>
									<span className="new-price">R$ {formatarValorComVirgula(produto.promocao *1)}</span>
								</div>
								<div className="div-buttons">
									<div className="discount">
										<span>
											Economize <span style={{ color: "#fff021", fontWeight: "600", fontStyle: "italic", letterSpacing: "1px" }}>R${formatarValorComVirgula(produto.preco - produto.promocao)}</span>
										</span>
									</div>
									<span style={{ fontSize: ".725em", fontWeight: "500", color: "#303030" }}>Ou em até 10x de R${formatarValorComVirgula(produto.promocao / 10)} sem juros</span>
									<button className="buy-button">Compre Já</button>
									<button className="cart-button">
										<span >Adicione ao Carrinho</span>
									</button>
								</div>
							</div>
						</div>
						<div className="Description">
							<div className="div-title">
								<h1 className="title">Descrição do Produto</h1>
							</div>
							<div className="div-content">
								<span className="description-text">
									{produto.descri}
								</span>
							</div>
						</div>
						<div className="div-characteristics">
							<div className="about-product">
								<span className="specification">Marca</span>
								<div className="space"></div>
								<div className="detail">
									<span className="detail-text">{produto.marca}</span>
								</div>
							</div>

							<div className="about-product">
								<span className="specification">Cor</span>
								<div className="space"></div>
								<div className="detail">
{									<span className="detail-text">{produto.cores}</span>
}								</div>
							</div>
						</div>
					</div>
				</div>
			</header>
			<Rodape />
		</main>
	);
}


