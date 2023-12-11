// ConnectComponent.js
import React from 'react';

import { OfrecerServicio } from "./OfrecerServicio"
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";

import './EstiloComponentes.css'; // Importa el archivo de estilos

//import OfrecerServicio from "./OfrecerServicio" // Asegúrate de tener este componente

const Principal = () => {
  return (

    <div className="connect-container">

      {/* <div>
        <img
          src='.../'
          alt="Descripción de la imagen"
          style={{ height: '50px', marginRight: '20px' }}
        />
      </div> */}
      <h2 className="connect-title">Conectando 3.0</h2>
      <p className="connect-description">Conectado es una plataforma basada en la
        web 3.0 diseñada para crear una
        comunidad de usuarios que puedan
        conectarse y compartir servicios de
        manera eficaz y colaborativa. Este sistema
        utiliza las tecnologías más avanzadas de la
        web 3.0 para proporcionar una experiencia
        de usuario altamente personalizada y
        contextualizada</p>
      <div className="connect-buttons-container">
      <button className="connect-button" onClick={() => window.location.href="./OfrecerServicio"}>Ofrecer Servicio</button>
        <button className="connect-button" onClick={() => console.log('Botón 2 clicado')}>Solicitar Servicio</button>
      </div>
    </div>
  );
};

export { Principal };
