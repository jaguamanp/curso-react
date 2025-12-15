import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Perfil from './components/Perfil';
import Semaforo from './components/Semaforo';

function App() {
  const [count, setCount] = useState(0);

  const [ocultar, setOcultar] = useState(false);

  const [opcion, setOpcion] = useState("rojo");

  const getCambiarColor = ()=> {
    if (opcion == 'rojo') {
      setOpcion("verde");
    }else if(opcion == 'verde')
    {
      setOpcion('amarillo');
    }else
    {
      setOpcion("rojo")
    }
  };

  return (
    <>
      <button onClick={() => setCount(count + 1)}>Aumento {count} </button>

      <hr />

      <div>
        {
          !ocultar ? <Perfil></Perfil> : null
        }
        <button onClick={ () => setOcultar(!ocultar)}> {ocultar ? 'Mostrar' : 'Ocultar'}</button>
      </div>

      <hr />

      <div>
        <h3>---- Semaforo ----</h3>
        
        <Semaforo name={opcion} />

        <button onClick={() => getCambiarColor()}>Cambiar color</button>
      </div>
    </>

  )
}

export default App
