// RegistroUsuario.js
import React, { useState } from 'react';
import './EstiloComponentes.css'; // Importa el archivo CSS

const RegistroUsuario = () => {
  const [nombre, setNombre] = useState('');
  const [apellidoPaterno, setApellidoPaterno] = useState('');
  const [apellidoMaterno, setApellidoMaterno] = useState('');
  const [direccion, setDireccion] = useState('');
  const [edad, setEdad] = useState('');
  const [telefono, setTelefono] = useState('');
  const [correo, setCorreo] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Lógica para enviar la información del nuevo usuario al backend
    console.log('Nombre:', nombre);
    console.log('Apellido Paterno:', apellidoPaterno);
    console.log('Apellido Materno:', apellidoMaterno);
    console.log('Dirección:', direccion);
    console.log('Edad:', edad);
    console.log('Teléfono:', telefono);
    console.log('Correo Electrónico:', correo);

    // Puedes realizar una llamada al backend para crear el nuevo usuario
    // y manejar la lógica correspondiente aquí
  };

  return (
    <div className="registro-usuario-container">
      <h3 className="registro-usuario-title">Registro de Usuario</h3>
      <form className="registro-usuario-form" onSubmit={handleSubmit}>
        <label>
          Nombre:
          <input type="text" value={nombre} onChange={(e) => setNombre(e.target.value)} />
        </label>
        <label>
          Apellido Paterno:
          <input type="text" value={apellidoPaterno} onChange={(e) => setApellidoPaterno(e.target.value)} />
        </label>
        <label>
          Apellido Materno:
          <input type="text" value={apellidoMaterno} onChange={(e) => setApellidoMaterno(e.target.value)} />
        </label>
        <label>
          Dirección:
          <input type="text" value={direccion} onChange={(e) => setDireccion(e.target.value)} />
        </label>
        <label>
          Edad:
          <input type="text" value={edad} onChange={(e) => setEdad(e.target.value)} />
        </label>
        <label>
          Teléfono:
          <input type="text" value={telefono} onChange={(e) => setTelefono(e.target.value)} />
        </label>
        <label>
          Correo Electrónico:
          <input type="email" value={correo} onChange={(e) => setCorreo(e.target.value)} />
        </label>
        <button type="submit">Registrarse</button>
      </form>
    </div>
  );
};

export { RegistroUsuario };
