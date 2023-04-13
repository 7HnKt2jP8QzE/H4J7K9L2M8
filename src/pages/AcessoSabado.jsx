import { useEffect, useState } from 'react';
import axios from 'axios';

function AccesoSabado({ setIsAuthenticatedS }) {

  const [user, setUser] = useState([])

  useEffect(() => {
    const URL = 'https://raw.githubusercontent.com/7HnKt2jP8QzE/X9kP5JzA1tYf/main/SE4sN6jK8mL9tZ2.json'
    axios.get(URL)
      .then(response => setUser(response.data))
      .catch(err => console.log(err))
  }, [])


  const [username, setUsername] = useState('');

  function verificarUsuario(usuario) {
    const existeUsuario = user.some((u) => u.Usuario === usuario);
    if (existeUsuario) {
      setIsAuthenticatedS(true);
    }
    return existeUsuario;
  }

  const handleLogin = (e) => {
    e.preventDefault();
    if (verificarUsuario(username)) {
      setIsAuthenticatedS(true);

    } else {
      setIsAuthenticatedS(false);
      alert('Usuario incorrecto');
    }
  };

  return (
    <div className='AccesoTotal'>
      <h1>Acceso a Sabados</h1>
      <form onSubmit={handleLogin}>
        <label>
          Usuario:
          <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
        </label>
        <br />
        <button type="submit">Iniciar sesión</button>
      </form>
    </div>
  );
}

export default AccesoSabado;