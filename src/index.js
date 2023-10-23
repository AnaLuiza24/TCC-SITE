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
import Conta from './pages/client/minhaConta';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination'
import 'swiper/css/scrollbar';
import NewEndereco from './pages/client/endereco';
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
        <Route path='/lista-cliente' element={<ListaCliente />} />
        <Route path='/lista-produto' element={<ListaProduto />} />
        <Route path='/adicionar-produto' element={<AdicionarProduto />} />
        <Route path='/endereco' element={<NewEndereco />} />
        <Route path='/minha-conta' element={<Conta />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

