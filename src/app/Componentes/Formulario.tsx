import React, { useState } from 'react';
import { Persona } from '../Interfaces/IFormulario';
import { registrarPersona } from '../Firebase/Promesas';

export const Formulario = () => {
  const [nombre, setNombre] = useState('');
  const [contraseña, setContraseña] = useState('');
  const [edad, setEdad] = useState('');
  const [fecha_nacimiento, setFechaNacimiento] = useState('');
  const [email, setEmail] = useState('');
  const [pais, setPais] = useState('');
  const [telefono, setTelefono] = useState('');
  const [t_cliente, sett_cliente] = useState('');
  const [errorNombre, setErrorNombre] = useState('');
 

  const paisesDisponibles = [
    "Argentina",
    "Brasil",
    "Chile",
    "Colombia",
    "Guatemala",
    "Peru",
    // Agrega más países si es necesario
  ];

  const validarNombre = (valor: string) => {
    setNombre(valor.trim());
    if (valor.trim() === '') {
      setErrorNombre('El nombre no puede estar vacío');
    } else if (valor.length < 3) {
      setErrorNombre('El nombre debe tener al menos 3 letras');
    } else {
      setErrorNombre('');
    }
  };

  const registrar = () => {
    if (nombre === '') {
      setErrorNombre('El nombre no puede estar vacío');
      return;
    }

    if (contraseña === '') {
      ('La contraseña no puede estar vacía');
      return;
    }

    const edadNum = parseInt(edad);
    if (isNaN(edadNum) || edadNum <= 0) {
      return;
    }

    if (fecha_nacimiento.trim() === '') {
     
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      
      return;
    }

    if (pais.trim() === '') {
      
      return;
    }

    const telefonoRegex = /^[0-9+]+$/;
    if (telefono.trim() === '') {
      
      return;
    } else if (!telefonoRegex.test(telefono)) {
      
      return;
    }

    if (t_cliente.trim() === '') {
      
      return;
    }

    // Asuman que se validó todo
    const p: Persona = {
      nombre,
      contraseña,
      edad: parseInt(edad),
      fecha_nacimiento,
      email,
      pais,
      telefono,
      t_cliente,
    };

    registrarPersona(p);
    console.log(nombre);
    console.log(edad);
    console.log(fecha_nacimiento);
    console.log(email);
    console.log(pais);
    console.log(telefono);
    console.log(t_cliente);

    alert('haz sido registrado ' + nombre);
  };

  return (
    <form>
      <label>
        Nombre: <br />
        <input
          type="text"
          onChange={(e) => validarNombre(e.target.value)}
          value={nombre}
        />
        <br />
      </label>
      <span>{errorNombre}</span>
      <br />

      <label>
        Contraseña: <br />
        <input
          type="password"
          onChange={(e) => setContraseña(e.target.value)}
          value={contraseña}
        />
        <br />
      </label>
      <br />

      <label>
        Edad: <br />
        <input
          type="number"
          onChange={(e) => setEdad(e.target.value)}
          value={edad}
        />
        <br />
      </label>
      <br />
      <label>
        Fecha De Nacimiento: <br />
        <input
          type="date"
          onChange={(e) => setFechaNacimiento(e.target.value)}
          value={fecha_nacimiento}
        />
        <br />
      </label>
      
      <br />

      <label>
        Email: <br />
        <input
          type="email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
        <br />
      </label>
      <br />

      <label>
        Pais: <br />
        <select onChange={(e) => setPais(e.target.value)} value={pais}>
          <option value="">Selecciona un país</option>
          {paisesDisponibles.map((pais) => (
            <option key={pais} value={pais}>
              {pais}
            </option>
          ))}
        </select>
        <br />
      </label>
      <br />
      <label>
        Telefono: <br />
        <input
          type="tel"
          onChange={(e) => setTelefono(e.target.value)}
          value={telefono}
        />
        <br />
      </label>
      <br />
      <label>
        tipo cliente: <br />
        <input
          type="radio"
          name="t_cliente"
          value="Vip"
          onChange={(e) => sett_cliente(e.target.value)}
        />
        <label>Vip</label>
        <input
          type="radio"
          name="t_cliente"
          value="No_Vip"
          onChange={(e) => sett_cliente(e.target.value)}
        />
        <label>No Vip</label>
        <br />
      </label>
      <br />

      <button type="button" onClick={registrar}>
        Registrar
      </button>
    </form>
  );
};

export default Formulario;
