import React from 'react'
import Portada from '../components/Portada'
import Semana from '../components/Semana'

function Home() {
  return (
    <div className="Home">
      <Portada />
      <Semana enlace='alunes' color='#00c4cc' dia='Lunes' />
      <Semana enlace='martes' color='#ff738e' dia='Martes' />
      <Semana enlace='miercoles' color='#a548ff' dia='Miercoles' />
      <Semana enlace='jueves' color='#ffa53b' dia='Jueves' />
      <Semana enlace='aviernes' color='#6422b8' dia='Viernes' />
      <Semana enlace='asabado' color='#ffd93b' dia='Sabado' />
      <Semana enlace='domingo' color='#5e17eb' dia='Domingo' largo='28vh' ancho='60%' margen='10%' />
    </div>
  )
}

export default Home
