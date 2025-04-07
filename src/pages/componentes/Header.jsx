import React from "react"
import { Link } from "react-router-dom";
import "./Header.css";

// Importação de componentes

const Header = () => {
    return (
        <header id='cabecalho'>
            <nav>
                <Link to="/início" className="cabecalho-links">Início</Link>
                <Link to="/posts" className="cabecalho-links">Publicações</Link>
                <Link to="/Tools" className="cabecalho-links">Ferramentas</Link>
            </nav>
        </header>
    )
}

export default Header;