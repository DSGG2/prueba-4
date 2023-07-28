import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Persona } from '../Interfaces/IFormulario'
import { actualizarPersona, obtenerPersona, eliminarPersona } from '../Firebase/Promesas';

export const Actualizar = () => {
    const params = useParams()
    const [nombre, setNombre] = useState("")
    const [errorNombre, setErrorNombre] = useState("")
    const [contraseña, setContraseña] = useState("")
    const [edad, setEdad] = useState("")
    const [fecha_nacimiento, setFechaNacimiento] = useState("")
    const [email, setEmail] = useState("")
    const [pais, setPais] = useState("")
    const [telefono, setTelefono] = useState("")
    const [t_cliente, sett_cliente] = useState("")
    const [idPersona,setIdPersona] = useState("")
  useEffect(()=>{
    if(params.idPersona!=undefined){
       obtenerPersona(params.idPersona).then((v)=>{
        if(v!=undefined && v.idPersona!= undefined){
            setNombre(v.nombre)
            setContraseña(v.contraseña)
            setEdad(""+v.edad)
            setFechaNacimiento(v.fecha_nacimiento)
            setEmail(v.email)
            setPais(v.pais)
            setTelefono(v.telefono)
            sett_cliente(v.t_cliente)
            setIdPersona(v.idPersona)
        }
       })
    
    }
    //promesas que recuperan el objeto en base a un id
    //carguemos en cada estado su valor
  },[])
  
  
  const actualizar = ()=>{

    if(nombre.trim()==""){
      setErrorNombre("No valen espacios en blanco")
    }else{
      setNombre(nombre.trim())
    }

    //Asuman que se valido todo
    const p:Persona = {
        nombre,
        contraseña,
        edad:parseInt(edad),
        fecha_nacimiento,
        email,
        pais,
        telefono,
        t_cliente,
        idPersona
        
    }
    //actualizar
    actualizarPersona(idPersona,p).then(()=>{
        alert("Se actualizo con exito")
    })
    //registrarPersona(p)
    console.log(nombre);
    console.log(edad);
    console.log(contraseña)
    console.log(fecha_nacimiento)
    console.log(email)
    console.log(pais)
    console.log(telefono)
    console.log(t_cliente)
    alert("haz sido registrado "+nombre+" ");
  }
  const validarNombre = (valor:string)=>{
    setNombre(valor);
    if(valor.length<3){
      setErrorNombre("Debe tener mas de 3 letras")
    }
    else{
      setErrorNombre("")
    }


  }
  return (
    <form>
        <label>Nombre: <br/>
        <input type="text" 
          onChange={(e)=>validarNombre(e.target.value)}
          value={nombre}
          /><br/></label>

        <span>{errorNombre}</span><br/>

        <label>Contraseña: <br/>
        <input type="password"
          onChange={(e)=>setContraseña(e.target.value)}
          value={contraseña}
        /><br/></label>
        
        <label>Edad: <br/>
        <input type="number"
          onChange={(e)=>setEdad(e.target.value)}
          value={edad}
          /><br/></label>
        
        <label>Fecha de Nacimiento: <br/>
        <input type="date"
          onChange={(e)=>setFechaNacimiento(e.target.value)}
          value={fecha_nacimiento}
          /><br/></label>
        
        <label>Email: <br/>
        <input type="text"
          onChange={(e)=>setEmail(e.target.value)}
          value={email}
          /><br/></label>

        <label>Pais: <br/>
        <input type="text"
          onChange={(e)=>setPais(e.target.value)}
          value={pais}
          /><br/></label>

        <label>Telefono: <br/>
        <input type="text"
          onChange={(e)=>setTelefono(e.target.value)}
          value={telefono}
          /><br/></label>

        <label>tipo cliente: <br/>
        <input type="radio" name="t_cliente" value="Vip" onChange={(e)=>sett_cliente(e.target.value)}></input><label>Vip</label>
        <input type="radio" name="t_cliente" value="No_Vip" onChange={(e)=>sett_cliente(e.target.value)}></input><label>No Vip</label>
        <br/></label>  

        <button type='button' onClick={actualizar}>Actualizar</button>
    </form>
  )
}

