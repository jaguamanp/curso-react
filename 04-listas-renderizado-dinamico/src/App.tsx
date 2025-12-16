import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Listado from './components/Listado'
import Productos from './components/Productos'
import type { Producto } from "./dto/ProductoDto";

const data: Producto[] = 
[
  {
    id: 1, name: "Laptop gamers", description: 'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500', price: "1200"
  },
  {
    id: 2, name: "mouse", description: 'cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera', price: "15"
  }

];

function App() {

  let datos = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  return (
    <>
        <ul>
        {
          datos.map((num) => (
            <Listado num={num}></Listado>
          ))
        }
        </ul>   

        <hr />

        <ul>
          {
            data.map((pro)=>(
              <Productos props={pro}></Productos> 
            ))
          }
        </ul>

    </>
  )
}

export default App;
