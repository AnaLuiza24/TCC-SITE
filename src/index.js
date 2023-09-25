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

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/sobreNos' element={<SobreNos />} />
        <Route path='/politicaPrivacidade' element={<PrivacyPolicy />} />
        <Route path='/login' element={<Login />} />
        <Route path='/loginAdm' element={<LoginAdm />} />
        <Route path='/inicialAdm' element={<LandingPageADM />} />
        <Route path='/cadastro' element={<Cadastro />} />
        <Route path='/listaCliente' element={<ListaCliente />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

