import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './pages/Home';

import { BrowserRouter, Switch, Route } from 'react-router-dom';
import CadastroVideo from './pages/cadastro/Video';
import CadastroCategoria from './pages/cadastro/Categoria';

//Desafio master blaster - criar jogo para página 404
const Pagina404 = () => (
      <div>
        <h1>Página 404</h1>
      </div>)

ReactDOM.render(
  <BrowserRouter>
  <Switch>  
    <Route path="/" component={Home} exact />
    <Route path="/cadastro/video" component={CadastroVideo} exact/>
    <Route path="/cadastro/categoria" component={CadastroCategoria} exact/>
    <Route component={Pagina404} />
  </Switch>  
  </BrowserRouter>, 
  document.getElementById('root')
);