import { useEffect, useState } from 'react';
import axios from 'axios';

function AccesoViernes({ setIsAuthenticatedV }) {

  const [user, setUser] = useState([])

  useEffect(() => {
    const URL = 'https://raw.githubusercontent.com/7HnKt2jP8QzE/X9kP5JzA1tYf/main/VF2gM7tH9kL5pN8.json'
    axios.get(URL)
      .then(response => setUser(response.data))
      .catch(err => console.log(err))
  }, [])


  const [username, setUsername] = useState('');

  function verificarUsuario(usuario) {
    const existeUsuario = user.some((u) => u.Usuario === usuario);
    if (existeUsuario) {
      setIsAuthenticatedV(true);
    }
    return existeUsuario;
  }

  const handleLogin = (e) => {
    e.preventDefault();
    if (verificarUsuario(username)) {
      setIsAuthenticatedV(true);

    } else {
      setIsAuthenticatedV(false);
      alert('Usuario incorrecto');
    }
  };

  return (
    <div className='AccesoTotal'>
      <h1>Acceso a Viernes</h1>
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

export default AccesoViernes;
