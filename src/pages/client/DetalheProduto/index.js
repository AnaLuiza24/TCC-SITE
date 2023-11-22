import "./index.scss";
import { useNavigate, useParams } from "react-router-dom";
import Iphone from "../../../assets/images/iphone13.png";
import Iphone2 from "../../../assets/images/iphone13.webp";
import { useState } from "react";
import CabecalhoLogado from '../../../components/cabecalho-logado';
import Cabecalho from "../../../components/cabecalho";
import Rodape from '../../../components/rodape';
import Storage from "local-storage";


export default function Detalhe() {
	const navigate = useNavigate();
	const [produto, setProduto] = useState({ categorias: [], imagens: [], info: {} })
	const [image, setImage] = useState(Iphone);
	const [productName, setProductName] = useState(`iPhone 13 Apple 128GB Meia-noite Tela de 6,1", Câmera dupla de 12MP`);
	const [oldPrice, setOldPrice] = useState(0);
	const [newPrice, setNewPrice] = useState(0);
	const [discount, setDiscount] = useState(0);
	const [produto, setProduto] = useState({});

	const { id } = useParams();


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
								<img className="example" src={image} />
								<div className="Other-images">
									<img src={Iphone}
										onClick={() => {
											setImage(Iphone);
										}} />

									<img src={Iphone2}
										onClick={() => {
											setImage(Iphone2);
										}} />
								</div>
							</div>
							<div className="Product-informations">
								<div className="div-title">
									<h1>{produto.produto}</h1>
								</div>
								<div className="div-price">
									<span className="old-price">
										<s>R$ {produto.preco}</s>
									</span>
									<span className="new-price">R$ {produto.promocao}</span>
								</div>
								<div className="div-buttons">
									<div className="discount">
										<span>
											Economize <span style={{ color: "#fff021", fontWeight: "600", fontStyle: "italic", letterSpacing: "1px" }}>R${produto.preco - produto.promocao}</span>
										</span>
									</div>
									<span style={{ fontSize: ".725em", fontWeight: "500", color: "#303030" }}>Ou em até 10x de R${produto.promocao / 10} sem juros</span>
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


