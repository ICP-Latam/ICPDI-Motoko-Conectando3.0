import React, { useState } from 'react';

const InsertarServicio = () => <div>Insertar Servicio</div>;
const ModificarServicio = () => <div>Modificar Servicio</div>;
const ActualizarServicio = () => <div>Actualizar Servicio</div>;
const SolicitarServicio = () => <div>Solicitar Servicio</div>;

const OfrecerServicio = () => {
  const [accion, setAccion] = useState('insertar');

  return (
    <div>
      <h2>Ofrecer Servicio</h2>
      <label>
        Seleccione lo que desee realizar:
        <select value={accion} onChange={(e) => setAccion(e.target.value)}>
          <option value="insertar">Insertar Servicio</option>
          <option value="modificar">Modificar Servicio</option>
          <option value="actualizar">Ver Servicio</option>
          <option value="solicitar">eliminar Servicio</option>
        </select>
      </label>
      {(() => {
        switch (accion) {
          case 'insertar':
            return <InsertarServicio />;
          case 'modificar':
            return <ModificarServicio />;
          case 'actualizar':
            return <ActualizarServicio />;
          case 'solicitar':
            return <SolicitarServicio />;
          default:
            return null;
        }
      })()}
    </div>
  );
};

export   {OfrecerServicio}
