import React from 'react';
import ReactDOM from 'react-dom';

import {Home} from './templates/Home/index';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { PokePage } from './templates/PokePage';
import { NotFoundPage } from './templates/NotFoundPage';
import { PokemonContext } from './context/pokemon-context';
import { GlobalStyle } from './styles/global-style';


ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle/>
    <PokemonContext>
      <BrowserRouter>
        <Routes>
          <Route path="/pokemon/:name" element={<PokePage/>}/>
          <Route path="/" element={<Home/>}  exact />
          <Route path="*" element={<NotFoundPage/>} />
        </Routes>
      </BrowserRouter>
    </PokemonContext>
 
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
