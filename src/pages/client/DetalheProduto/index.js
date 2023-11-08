import "./index.scss";
import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom';
import AnchorLink from 'react-anchor-link-smooth-scroll'
import Iphone from "../../../assets/images/iphone13.png";
import Iphone2 from "../../../assets/images/iphone13.webp";
import { useState, useEffect } from "react";
import CabecalhoLogado from '../../../components/cabecalho-logado';
import Cabecalho from "../../../components/cabecalho";
import Rodape from '../../../components/rodape';
import storage from "local-storage";


export default function Detalhe() {
	const navigate = useNavigate();
	const [image, setImage] = useState(Iphone);
	const [productName, setProductName] = useState(`iPhone 13 Apple 128GB Meia-noite Tela de 6,1", Câmera dupla de 12MP`);
	const [oldPrice, setOldPrice] = useState(4893.0);
	const [newPrice, setNewPrice] = useState(4249.0);
	const [discount, setDiscount] = useState(0);
	useEffect(() => {
		setDiscount(oldPrice - newPrice);
	}, []);
	return (
		<div className="Main">
				 {storage('usuario-logado') ? <CabecalhoLogado /> : <Cabecalho/> }
			<div className="Content">
				<div className="Pages-menu">
					<div className="Pages-menu-content">
						<span
							className="content"
							onClick={() => {
								<Link id='home' to={'/'}>Home</Link>; //endereço da home aqui!
							}}>
							Home {">"}
						</span>
						<span
							className="content"
							onClick={() => {
								<Link id='smartphone' to={'/smartphones'}>Smartphones</Link> //endereço do "celular" aqui!
							}}>
							Celular {">"}
						</span>
						<span
							className="content"
							style={{ fontWeight: "600" }}
							onClick={() => {
								navigate(-1); //endereço do Iphone 13 Apple" aqui!
							}}>
							{" "}
							Iphone 13 Apple{" "}
						</span>
						{/* <span> tem um gerenciamento de espaço melhor que o <p> */}
					</div>
				</div>
				<div className="Main-card">
					<div className="Card">
						{" "}
						{/* Div mãe para o Card */}
						<div className="Product">
							{" "}
							{/* Div parte do produto */}
							<div className="Product-image">
								{" "}
								{/* Div parte do produto/imagem */}
								<img className="example" src={image} />
								<div className="Other-images">
									<img
										src={Iphone}
										onClick={() => {
											setImage(Iphone);
										}}
									/>
									<img
										src={Iphone2}
										onClick={() => {
											setImage(Iphone2);
										}}
									/>
								</div>
							</div>
							<div className="Product-informations">
								<div className="div-title">
									<h1>{productName}</h1> {/* Troque esse texto pela variável do nome do produto selecionado */}
								</div>
								<div className="div-price">
									<span className="old-price">
										<s>R$ {oldPrice},00</s>
									</span>
									<span className="new-price">R$ {newPrice},00</span>
								</div>
								<div className="div-buttons">
									<div className="discount">
										{" "}
										<span>
											Economize <span style={{ color: "#fff021", fontWeight: "600", fontStyle: "italic", letterSpacing: "1px" }}>R${discount},00</span>
										</span>
									</div>
									<span style={{ fontSize: ".725em", fontWeight: "500", color: "#303030" }}>Ou em até 10x de R${newPrice / 10} sem juros</span>
									<button className="buy-button">Compre Já</button>
									<button className="cart-button">
										<span>Adicione ao Carrinho</span>
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
								Apple iPhone 13 128GB Meia-noite Tela 6,1” 12MP
								iPhone 13. O sistema de câmera dupla mais avançado em um iPhone. Chip A15 Bionic com velocidade impressionante. Um grande salto em bateria. Projetado para durar. 5G ultrarrápido*. E tela Super Retina XDR mais brilhante. Avisos legais: *É preciso ter um plano de dados. 5G só está disponível em alguns países e por meio de determinadas operadoras. As velocidades variam de acordo com as condições e operadoras locais. Para obter detalhes sobre a compatibilidade com 5G, entre em contato com sua operadora e consulte apple.com/br/iphones/.
									with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
								</span>
							</div>
						</div>
						<div className="div-characteristics"> {/* div mãe das informações */}
							<div className="about-product"> {/* Mapear esse objeto todo, assim terá vários iguais com as informações que vierem do banco de dados */}
								<span className="specification">Marca</span> {/* map */}
								<div className="space"></div>
								<div className="detail">
									<span className="detail-text">Apple</span> {/* map */}
								</div>{" "}
								{/* fim do map */}
							</div>
						</div>
					</div>
				</div>
			</div>
			<Rodape />
		</div>
	);
}


