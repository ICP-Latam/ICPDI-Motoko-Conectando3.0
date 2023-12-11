import React, { useState } from 'react';

const SolicitarServicio = () => {
  const [tipoServicio, setTipoServicio] = useState('');
  const [lugar, setLugar] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Lógica para enviar la solicitud al backend (puedes utilizar onBuscarServicios aquí)
    console.log('Tipo de Servicio:', tipoServicio);
    console.log('Lugar:', lugar);

    // Simulación de resultados (reemplaza esto con la llamada al backend)
    // setResultados([...nuevosResultados]);
  };

  return (
    <div className="connect-container">
      <form onSubmit={handleSubmit}>
        <label>
          Tipo de Servicio:
          <input type="text" value={tipoServicio} onChange={(e) => setTipoServicio(e.target.value)} />
        </label>
        <label>
          Lugar:
          <input type="text" value={lugar} onChange={(e) => setLugar(e.target.value)} />
        </label>
        <button className="connect-button"  type="submit">Buscar</button>
      </form>
    </div>
  );
};

export { SolicitarServicio };
