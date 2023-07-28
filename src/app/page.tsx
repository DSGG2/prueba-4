'use client'
import {BrowserRouter} from 'react-router-dom'
import { Header } from './layout/Header'
import { AppRouter } from './router/AppRouter'
import { Footer } from './layout/Footer'
import { RedesSociales} from './Componentes/RedesSociales'




export default function Home() {
  return (
    <>
      <BrowserRouter>
        <Header/>
        <AppRouter/>
        <RedesSociales/>
      </BrowserRouter>
      
    </>
  )
}
