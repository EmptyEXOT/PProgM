import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./pages/Home";
import PProg from "./pages/PProg/PProg";
import './globals/main.module.css'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
      <Routes>
          <Route path='/' element={<App/>}>
              <Route path='home' element={<Home/>} />
              <Route path='pprog' element={<PProg/>} />
          </Route>
      </Routes>
  </BrowserRouter>
);
