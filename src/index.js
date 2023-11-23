import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import SobreNos from './pages/client/us';
import PrivacyPolicy from './pages/client/privacyPolicy';
import Login from './pages/client/login';
import LoginAdm from './pages/adm/loginAdm';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LandingPageADM from './pages/adm/landingPage';
import Cadastro from './pages/client/cadastro';
import ListaCliente from './pages/adm/listaCliente';
import ListaProduto from './pages/adm/listaProduto';
import AdicionarProduto from './pages/adm/adicionarProduto';
import LandingPage from './pages/client/ladingPage';
import {register} from 'swiper/element/bundle'
import AlterarDados from './pages/client/AlterarDados';
import AlterarSenha from './pages/client/AlterarSenha';
import Rastrear from './pages/client/RastrearPedido';
import NewEndereco from './pages/client/endereco';
import Conta from './pages/client/minhaConta';
import Confirmacao from './pages/client/confirmacaoEntrega';
import Acessorios from './pages/client/acessorios';
import Smartphones from './pages/client/smartphones';
import Detalhe from './pages/client/DetalheProduto';
import ListaPedido from './pages/adm/listaPedidos';
import Carrinho from './pages/client/Carrinho';
import CarrinhoProduto from './pages/client/CarrinhoProduto';
import CarrinhoFrete from './pages/client/CarrinhoFrete';
import DuvidasFrequentes from './pages/client/duvidasFrequentes';
import AtendimentoCliente from './pages/client/atendimentoCliente';
import Buscar from './pages/client/buscar';
import 'react-confirm-alert/src/react-confirm-alert.css';



import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination'
import 'swiper/css/scrollbar';
import { ToastContainer } from 'react-toastify';
register();


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <ToastContainer />
      <Routes>
        <Route path='/home' element={<LandingPage />} />
        <Route path='/sobre-nos' element={<SobreNos />} />
        <Route path='/politica-privacidade' element={<PrivacyPolicy />} />
        <Route path='/login' element={<Login />} />

        <Route path='/adm' element={<LandingPageADM />} />
        <Route path='/adm/login' element={<LoginAdm />} />
        <Route path='/cadastro' element={<Cadastro />} />
        <Route path='/adm/lista-cliente' element={<ListaCliente />} />
        <Route path='/adm/produto/lista' element={<ListaProduto />} />
        <Route path='/adm/produto/cadastrar' element={<AdicionarProduto />} />
        <Route path='/adm/produto/alterar/:idParam' element={<AdicionarProduto />} />

        <Route path='/rastrear' element={<Rastrear />} />
        <Route path='/minha-conta' element={<Conta />} />
        <Route path='/confirmacao-entrega' element={<Confirmacao />} />
        <Route path='/endereco' element={<NewEndereco />} />

        <Route path='/smartphones' element={<Smartphones />} />
        <Route path='/smartphones/:id' element={<Smartphones />} />

        <Route path='/alterar-dados' element={<AlterarDados />} />
        <Route path='/alterar-senha' element={<AlterarSenha />} />
        
        <Route path='/acessorios' element={<Acessorios />} />
        <Route path='/acessorios/:id' element={<Acessorios />} />

        <Route path='/detalhe-produto/:id' element={<Detalhe />} />

        <Route path='/buscar-produto/:pesquisa/:pagina' element={<Buscar />} />

        <Route path='/adm/lista-pedido' element={<ListaPedido />} />
        <Route path='/Carrinho' element={<Carrinho />} />
        <Route path='/CarrinhoProduto' element={<CarrinhoProduto />} />
        <Route path='/Carrinhofrete' element={<CarrinhoFrete />} />
        <Route path='/duvidas-frequentes' element={<DuvidasFrequentes />} />
        <Route path='/atendimento-cliente' element={<AtendimentoCliente />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

