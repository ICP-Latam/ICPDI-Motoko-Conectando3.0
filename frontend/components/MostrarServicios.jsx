// MostrarServicios.js
import React, { useState, useEffect } from 'react';
import './EstiloComponentes.css'; // Importa el archivo CSS

const MostrarServicios = () => {
  const [servicios, setServicios] = useState([]);

  // Simula una llamada al backend para obtener la lista de servicios
  useEffect(() => {
    // Puedes ajustar esta lógica según cómo obtienes los datos desde tu backend
    const obtenerServiciosDesdeBackend = async () => {
      try {
        // Realiza una llamada al backend para obtener la lista de servicios
        // Puedes usar fetch o axios para realizar la solicitud
        const response = await fetch('/api/servicios'); // Ajusta la URL según tu configuración
        const data = await response.json();

        // Actualiza el estado con la lista de servicios
        setServicios(data);
      } catch (error) {
        console.error('Error al obtener la lista de servicios:', error);
      }
    };

    // Llama a la función para obtener los servicios cuando el componente se monta
    obtenerServiciosDesdeBackend();
  }, []); // El segundo parámetro del useEffect [] indica que solo se ejecutará una vez al montarse el componente

  return (
    <div className="mostrar-servicios-container">
      <h3 className="mostrar-servicios-title">Lista de Servicios</h3>
      <ul className="mostrar-servicios-list">
        {servicios.map((servicio) => (
          <li key={servicio.id}>
            ID: {servicio.id} - Nombre: {servicio.nombre} - Tipo: {servicio.tipo} - Ubicación: {servicio.ubicacion} - Precio: {servicio.precio}
          </li>
        ))}
      </ul>
    </div>
  );
};

export { MostrarServicios };
