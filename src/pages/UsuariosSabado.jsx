import React, { useEffect, useState } from 'react'
import TablaAsistenciaSabado from '../components/TablaAsistenciaSabado'
import TablaTT from '../components/TablaCotidianoSabado'
import axios from 'axios'
import Menu from '../components/Menu'

const usuariosSabado = () => {

  const [user, setUser] = useState([])

  useEffect(() => {
    const URL = 'https://raw.githubusercontent.com/7HnKt2jP8QzE/X9kP5JzA1tYf/main/SE4sN6jK8mL9tZ2.json'
    axios.get(URL)
      .then(response => setUser(response.data))
      .catch(err => console.log(err))
  }, [])


  console.log(user[0]?.Usuario)

  return (

    <div>
      <TablaAsistenciaSabado asistencia={user} />
      <br />
      <TablaTT asistencia={user} />
    </div>
  )
}

export default usuariosSabado