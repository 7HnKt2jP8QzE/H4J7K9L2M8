import { useEffect, useState } from 'react';
import axios from 'axios';

function AccesoLunes({ setIsAuthenticated }) {

  const [user, setUser] = useState([])

  useEffect(() => {
    const URL = 'https://raw.githubusercontent.com/7HnKt2jP8QzE/X9kP5JzA1tYf/main/LgH2rL8xW9sQjFzK.json'
    axios.get(URL)
      .then(response => setUser(response.data))
      .catch(err => console.log(err))
  }, [])


  const [username, setUsername] = useState('');

  function verificarUsuario(usuario) {
    const existeUsuario = user.some((u) => u.Usuario === usuario);
    if (existeUsuario) {
      setIsAuthenticated(true);
    }
    return existeUsuario;
  }

  const handleLogin = (e) => {
    e.preventDefault();
    if (verificarUsuario(username)) {
      setIsAuthenticated(true);

    } else {
      setIsAuthenticated(false);
      alert('Usuario incorrecto');
    }
  };

  return (
    <div className='AccesoTotal'>
      <h1>Acceso a Lunes</h1>
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

export default AccesoLunes;
