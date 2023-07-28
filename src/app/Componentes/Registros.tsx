import React, { useEffect, useState } from 'react'
import { obtenerPersonas } from '../Firebase/Promesas'
import { Persona } from '../Interfaces/IFormulario'
import { Link } from 'react-router-dom'



export const Registros = () => {
    const [personas, setPersonas] = useState<Persona[]>([])
    useEffect(()=>{
        obtenerPersonas().then((listado)=>{
            console.log("Ya estoy listo")
            console.log(listado)
            setPersonas(listado)
        })
       
    },[])

    const renderizarDatos = ()=>{
        var r = personas.map((p)=>{
            return <tr>
                    <td>{p.nombre}</td>
                    <td>{p.contraseña}</td>
                    <td>{p.edad}</td>
                    <td>{p.fecha_nacimiento}</td>
                    <td>{p.email}</td>
                    <td>{p.pais}</td>
                    <td>{p.telefono}</td>
                    <td>{p.t_cliente}</td>
                    <td><Link to={"/actualizar/"+p.idPersona}>Actualizar</Link></td>
                    <td><Link to={"/eliminar/"+p.idPersona}>Eliminar</Link></td>
                </tr>
        })
        return r
    }

    return (
    <table>
        <tr>
            <th>Nombre</th>
            <th>Contraseña</th>
            <th>Edad</th>
            <th>Fecha de Nacimiento</th>
            <th>Email</th>
            <th>Pais</th>
            <th>Telefono</th>
            <th>t_cliente</th>
            <th>Editar</th>
            <th>Eliminar</th>
        </tr>
        {
            renderizarDatos()
        }
    </table>
  )
}
