// Importação de componentes
import React from "react"
import Header from "../componentes/Header";
import "./Posts.css";

// Importação de imagens
const images  = require.context('../../img/posts', false, /.*/)

console.log(images.keys().map(images));

const postagens = () => {
    return (
        <div>
            <Header />
            <h1 id="title-posts">Alguns trabalhos</h1>
            <div id="posts">
                <div className="container"><img src={images.keys().map(images)[0]} alt="" /></div>
                <div className="container"><img src={images.keys().map(images)[1]} alt="" /></div>
                <div className="container"><img src={images.keys().map(images)[2]} alt="" /></div>
                <div className="container"><img src={images.keys().map(images)[3]} alt="" /></div>
                <div className="container"><img src={images.keys().map(images)[4]} alt="" /></div>
                <div className="container"><img src={images.keys().map(images)[5]} alt="" /></div>
            </div>
        </div>
    )
}

export default postagens;