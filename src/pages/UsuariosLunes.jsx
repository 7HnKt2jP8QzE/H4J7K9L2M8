import { useEffect, useState } from 'react'
import axios from 'axios'
import TablaAsistenciaLunes from '../components/TablaAsistenciaLunes'
import TablaTT from '../components/TablaCotidianoLunes'
import Menu from '../components/Menu'

const usuariosLunes = () => {

  const [user, setUser] = useState([])

  useEffect(() => {
    const URL = 'https://raw.githubusercontent.com/7HnKt2jP8QzE/X9kP5JzA1tYf/main/LgH2rL8xW9sQjFzK.json'
    axios.get(URL)
      .then(response => setUser(response.data))
      .catch(err => console.log(err))
  }, [])


  console.log(user[0]?.Usuario)

  return (

    <div>
      <Menu />
      <TablaAsistenciaLunes asistencia={user} />
      <br />
      <TablaTT asistencia={user} />


    </div>
  )
}

export default usuariosLunes