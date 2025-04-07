import React from 'react';
import './App.css';

// Importação imagens
import img_foto_criador from '../../img/foto-criador.jpg';

// Importação de logos
import logo_blender from '../../img/logo-blender.png';
import logo_css from '../../img/logo-css3.png';
import logo_figma from '../../img/logo-figma.png';
import logo_html from '../../img/logo-html5.png';
import logo_javascript from '../../img/logo-javascript.png';
import logo_reactjs from '../../img/logo-reactjs.png';

// Importação componentes
import Header from '../componentes/Header';

const Home = () => {
  return (
    <div id='conteudo'>
      <Header />
      <h1 className='title-conteudo'>Meu portfólio</h1>
      <main id='conteudo-principal'>
        <div>
          <h2 className='titulo-secundario'>Leandro Santos</h2>
          <p className='paragrafo'>Iniciei meus estudos com <strong className="bold">cursos online</strong> na internet para conhecer mais a área.
            Apaixonado por <strong className="bold">desenvolvimento web</strong> na criação de interfaces com animações nativas ou com o Blender, cores temáticas da marca, tudo com o visual criado de forma única e exclusiva.
            O objetivo é sempre solucionar determinado problema com paciência, com teste para <strong className="bold">melhor resultado</strong>.</p>
        </div>
        <img className='img-standard' src={img_foto_criador} alt="foto-criador"/>
      </main>
      <hr className='sections-underline' />
      <section>
        <h3 id='titulo-conhecimentos' className='titulo-secundario'>Conhecimentos em :</h3>
        <div id="habilidades">
          <div>
            <img className="logo-habilidades" src={logo_blender} alt="" />
            <p className='descricao-habilidade'>Blender</p>
          </div>
          <div>
            <img className="logo-habilidades" src={logo_css} alt="" />
            <p className='descricao-habilidade'>CSS3</p>
          </div>
          <div>
            <img className="logo-habilidades" src={logo_figma} alt="" />
            <p className='descricao-habilidade'>Figma</p>
          </div>
          <div>
            <img className="logo-habilidades" src={logo_html} alt="" />
            <p className='descricao-habilidade'>HTML5</p>
          </div>
          <div>
            <img className="logo-habilidades" src={logo_javascript} alt="" />
            <p className='descricao-habilidade'>JAVASCRIPT</p>
          </div>
          <div>
            <img className="logo-habilidades" src={logo_reactjs} alt="" />
            <p className='descricao-habilidade'>React Js</p>
          </div>
        </div>
        </section>
    </div>
  );
}

export default Home;
