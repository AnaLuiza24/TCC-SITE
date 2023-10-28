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
import Conta from './pages/client/minhaConta';
import Confirmacao from './pages/client/confirmacaoEntrega';
import Acessorios from './pages/client/acessorios';
import Smartphones from './pages/client/smartphones';
import Detalhe from './pages/client/DetalheProduto';
import ListaPedido from './pages/adm/listaPedidos';


import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination'
import 'swiper/css/scrollbar';
register();


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/sobre-nos' element={<SobreNos />} />
        <Route path='/politica-privacidade' element={<PrivacyPolicy />} />
        <Route path='/login' element={<Login />} />
        <Route path='/login-Adm' element={<LoginAdm />} />
        <Route path='/inicial-Adm' element={<LandingPageADM />} />
        <Route path='/cadastro' element={<Cadastro />} />
        <Route path='/alterar-dados' element={<AlterarDados />} />
        <Route path='/alterar-senha' element={<AlterarSenha />} />
        <Route path='/lista-cliente' element={<ListaCliente />} />
        <Route path='/lista-produto' element={<ListaProduto />} />
        <Route path='/adicionar-produto' element={<AdicionarProduto />} />
        <Route path='/rastrear' element={<Rastrear />} />
        <Route path='/minha-conta' element={<Conta />} />
        <Route path='/confirmacao-entrega' element={<Confirmacao />} />
        <Route path='/smartphones' element={<Smartphones />} />
        <Route path='/acessorios' element={<Acessorios />} />
        <Route path='/detalhe-produto' element={<Detalhe />} />
        <Route path='/lista-pedido' element={<ListaPedido />} />

      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

