import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Persona } from '../Interfaces/IFormulario'
import { obtenerPersona, eliminarPersona } from '../Firebase/Promesas';

export const Eliminar = () => {
  const params = useParams();
  const [nombre, setNombre] = useState("");
  const [idPersona, setIdPersona] = useState("");

  useEffect(() => {
    if (params.idPersona !== undefined) {
      obtenerPersona(params.idPersona).then((v) => {
        if (v !== undefined && v.idPersona !== undefined) {
          setNombre(v.nombre);
          setIdPersona(v.idPersona);
        }
      });
    }
  }, []);

  const eliminar = () => {
    eliminarPersona(idPersona)
      .then(() => {
        alert("Se eliminó con éxito");
        // Redirigir a la página principal o a donde desees después de eliminar
      })
      .catch((error) => {
        console.error("Error al eliminar:", error);
      });
  };

  return (
    <div>
      <h2>Eliminar Persona</h2>
      <p>¿Estás seguro que deseas eliminar a {nombre}?</p>
      <button type='button' onClick={eliminar}>Eliminar</button>
    </div>
  );
};
