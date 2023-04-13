import React, { useEffect, useState } from 'react'
import TablaAsistenciaViernes from '../components/TablaAsistenciaViernes'
import TablaTT from '../components/TablaCotidianoViernes'
import axios from 'axios'
import Menu from '../components/Menu'

const usuariosViernes = () => {

  const [user, setUser] = useState([])

  useEffect(() => {
    const URL = 'https://raw.githubusercontent.com/7HnKt2jP8QzE/X9kP5JzA1tYf/main/VF2gM7tH9kL5pN8.json'
    axios.get(URL)
      .then(response => setUser(response.data))
      .catch(err => console.log(err))
  }, [])


  console.log(user[0]?.Usuario)

  return (

    <div>
      <Menu />
      <TablaAsistenciaViernes asistencia={user} />
      <br />
      <TablaTT  asistencia={user}/>
    </div>
  )
}

export default usuariosViernes