//Importação de componentes
import React from 'react';
import Header from '../componentes/Header';
import './Tools.css';

const tools = () => {
    return (
        <div>
            <Header />
            <main id='principal-tools'>
                <h1 id='title-tools'>Programas utilizados</h1>
                <ul id='list-tools'>
                    <li>Adobe Premiere Pro</li>
                    <li>Adobe Photoshop</li>
                    <li>Adobe Lightroom</li>
                    <li>Canva</li>
                    <li>Blender 3D</li>
                    <li>Visual Studio Code</li>
                    <li>Microsoft Word</li>
                    <li>Microsoft Excel</li>
                </ul>
            </main>
        </div>
    )
}

export default tools;