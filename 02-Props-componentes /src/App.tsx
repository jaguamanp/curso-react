import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Saludos from './components/Saludos'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <Saludos nombre='jose' edad={18}></Saludos>
      </div>
    </>
  )
}

export default App
