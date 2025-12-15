
interface persona {
    nombre: string;
    edad: number;
}


const Saludos = ({nombre, edad}: persona) => {
    return <h2>Hola, mi nombre es {nombre} y tengo {edad} años </h2>
}

export default Saludos;