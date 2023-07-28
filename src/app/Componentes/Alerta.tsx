import React from 'react'
interface Props{
    nombre:string|number,
}

export const Alerta = (props:Props) => {
  return (
    <div> haz sido registrado {props.nombre} </div>
  )
}
