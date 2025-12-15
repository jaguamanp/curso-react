
interface Color {
    name: string;
}

const Semaforo = ( { name } : Color ) => {

    switch (name) {
        case 'rojo':
            return (<div className="div-r div-rojo">
                ROJO
            </div> );
            break;
        case 'amarillo':
            return (
            <div className="div-r div-amarillo">
                AMRILLO
            </div>
            );
            break;
        case 'verde':
            return (
            <div className="div-r div-verde">
                VERDE
            </div>
            );
            break;
    }
}

export default Semaforo;