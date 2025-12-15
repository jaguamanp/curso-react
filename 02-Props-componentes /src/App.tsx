import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Saludos from './components/Saludos'
import Perfil from './components/Perfil'
import type { Persona } from './interfaces/Persona'

function App() {

  const payload: Persona = {
    nombre: "Jose",
    apellido: "Guaman",
    cedula: "099999999",
    edad: 29
  };
  return (
    <>
      <div>
        <Saludos nombre='jose' edad={18}></Saludos>

        <Perfil persona={payload} />
      </div>
    </>
  )
}

export default App;
