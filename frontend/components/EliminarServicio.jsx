// EliminarServicio.js
import React, { useState } from 'react';
import './EstiloComponentes.css'; // Importa el archivo CSS

const EliminarServicio = () => {
  const [servicioId, setServicioId] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Lógica para enviar la información del servicio a eliminar al backend
    console.log('ID del Servicio a Eliminar:', servicioId);

    // Puedes realizar una llamada al backend para eliminar el servicio por ID
    // y manejar la lógica correspondiente aquí
  };

  return (
    <div className="eliminar-servicio-container">
      <h3 className="eliminar-servicio-title">Eliminar Servicio por ID</h3>
      <form className="eliminar-servicio-form" onSubmit={handleSubmit}>
        <label>
          ID del Servicio:
          <input type="text" value={servicioId} onChange={(e) => setServicioId(e.target.value)} />
        </label>
        <button type="submit">Eliminar Servicio</button>
      </form>
    </div>
  );
};

export { EliminarServicio };
