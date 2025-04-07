import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter, Routes, Route} from "react-router-dom";
import './index.css';
import App from './pages/Home/App';
import Posts from './pages/postagens/Posts';
import Tools from './pages/tools/Tools';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <HashRouter>
      <Routes>
        <Route path="/Início" element={<App />}/>
        <Route path="/Posts" element={<Posts />}/>
        <Route path="/Tools" element={<Tools />}/>
      </Routes>
    </HashRouter>
  </React.StrictMode>
);
