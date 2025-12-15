/*
🧩 DESAFÍO REACT #1
“Tarjeta de Perfil con Props”
🎯 Objetivo

Crear una pequeña aplicación en React que muestre tarjetas de perfil, usando componentes reutilizables y props para pasar información.
*/

import type { Persona } from "../interfaces/Persona";
interface PerfilProps {
    persona: Persona;
  }


const Perfil = ({ persona }: PerfilProps) => {
    return (
        <div>
            <div>
                <label>Nombre:</label>
                <p>{persona.nombre} </p>
            </div>
            <div>
                <label>Apellido:</label>
                <p>{persona.apellido} </p>
            </div>
            <div>
                <label>Edad:</label>
                <p>{persona.edad} </p>
            </div>
            <div>
                <label>Cedula:</label>
                <p>{persona.cedula} </p>
            </div>
        </div>
    )
    
};

export default Perfil;