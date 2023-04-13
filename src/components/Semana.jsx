import React from 'react'

const Semana = ({ color, dia, largo, ancho, margen, enlace }) => {
  return (
    <div className='dias' style={{ backgroundColor: `${color}`, width: `${ancho}`, height: `${largo}` }}>
      <a href={`${enlace}`}>
        <div className="dias2">
          <p style={{ marginTop: `${margen}`, marginBottom: `${margen}` }}>{dia}</p>
        </div>
      </a>
    </div>
  )
}

export default Semana