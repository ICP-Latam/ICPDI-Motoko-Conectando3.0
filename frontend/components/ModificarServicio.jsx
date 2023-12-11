import React, { useState } from 'react';

const ModificarServicio = ({ servicioInicial, onModificarServicio }) => {
  const [nombre, setNombre] = useState(servicioInicial.nombre);
  const [precio, setPrecio] = useState(servicioInicial.precio);
  const [ubicacionTipo, setUbicacionTipo] = useState(servicioInicial.ubicacionTipo);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes realizar la lógica para enviar la información modificada al backend
    const servicioModificado = {
      nombre,
      precio,
      ubicacionTipo,
    };

    onModificarServicio(servicioModificado);
  };

  return (
    <div>
      <h3>Modificar Servicio</h3>
      <form onSubmit={handleSubmit}>
        <label>
          Nombre:
          <input type="text" value={nombre} onChange={(e) => setNombre(e.target.value)} />
        </label>
        <label>
          Precio:
          <input type="text" value={precio} onChange={(e) => setPrecio(e.target.value)} />
        </label>
        <label>
          Ubicación o Tipo de Servicio:
          <input type="text" value={ubicacionTipo} onChange={(e) => setUbicacionTipo(e.target.value)} />
        </label>
        <button type="submit">Guardar Cambios</button>
      </form>
    </div>
  );
};

export  {ModificarServicio}
