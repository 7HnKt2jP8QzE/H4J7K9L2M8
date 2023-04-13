import React from 'react'
import portada from '../assets/portada.png'

const Portada = () => {
  return (
    <div>
        <div className="portadaInicial">
            <div className="nombre"> <h2>Herlan Benavides</h2></div>
            <div className="diseno"><h4>Diseño Grafico</h4></div>
            <div className="empresa"><h5>Cosvic</h5></div>
            <div className="imagen"><img src="src/assets/portada.png" alt="" /></div>
            <div className="frase"><h3>El diseño publicitario es una carrera que te permite dejar tu huella en el mundo, creando mensajes que pueden cambiar la forma en que las personas ven y experimentan el mundo que las rodea. </h3></div>
        </div>
    </div>
  )
}

export default Portada