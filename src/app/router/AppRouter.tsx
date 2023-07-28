'use client'
import React from 'react'
import {Routes,Route} from 'react-router-dom'
import { Alerta } from '../Componentes/Alerta'
import { Formulario } from '../Componentes/Formulario'
import { Registros } from '../Componentes/Registros';
import { Actualizar } from '../Componentes/Actualizar'
import { Eliminar } from '../Componentes/Eliminar'
export const AppRouter = () => {
  return (
    <section className="hero">
    <Routes>
        
        <Route path='/formulario' element={<Formulario/>}/>
        <Route path='/mostrar' element={<Registros/>}/>
        <Route path='/actualizar/:idPersona' element={<Actualizar/>}/>
        <Route path='/Eliminar/:idPersona' element={<Eliminar/>}/>
    </Routes>
    </section>
  )
}
