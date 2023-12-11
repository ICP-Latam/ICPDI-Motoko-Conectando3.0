// InsertarServicio.js
import React, { useState } from 'react';
import { useCanister } from '@connect2ic/react';
import './EstiloComponentes.css'; // Importa el archivo CSS

function InsertarServicio () {
  const [descripcion, setDescripcion] = useState('');
  const [tipoServicio, setTipoServicio] = useState('');
  const [ubicacion, setUbicacion] = useState('');
  const [precio, setPrecio] = useState('');

  const [funciones]   = useCanister("conectando_backend") // 
  const [servicio, setServicio] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Llama a la función del backend para insertar el nuevo servicio
    try {
      const respuesta = await funciones.crearServicio(
        tipoServicio,
        descripcion,
        ubicacion,
        precio
      );
      
      console.log(respuesta);
      // Puedes manejar la respuesta del backend como desees
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="insertar-servicio-container">
      <h3 className="insertar-servicio-title">Insertar Servicio</h3>
      <form className="insertar-servicio-form" onSubmit={handleSubmit}>
        <label>
          Nombre del Servicio:
          </label>
          <input type="text" value={descripcion} onChange={(e) => setDescripcion(e.target.value)} />
        
        <label>
          Tipo de Servicio:
          </label>
          <input type="text" value={tipoServicio} onChange={(e) => setTipoServicio(e.target.value)} />
        
        <label>
          Ubicación:
          </label>
          <input type="text" value={ubicacion} onChange={(e) => setUbicacion(e.target.value)} />
       
        <label>
          Precio:
          </label>
          <input type="text" value={precio} onChange={(e) => setPrecio(e.target.value)} />
       
        <button type="submit">Guardar Servicio</button>
      </form>
    </div>
  );
};

export default InsertarServicio ;
