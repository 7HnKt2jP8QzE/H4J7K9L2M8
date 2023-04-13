import { useState } from 'react'
import { createBrowserRouter, RouterProvider,  redirect ,  } from "react-router-dom";
import "./App.css"
import Home from "./pages/Home";
import Lunes from "./pages/UsuariosLunes";
import Martes from "./pages/UsuariosMartes";
import Miercoles from "./pages/UsuariosMiercoles";
import Jueves from "./pages/UsuariosJueves";
import Viernes from "./pages/UsuariosViernes";
import Sabado from "./pages/UsuariosSabado";
import Domingo from "./pages/UsuariosDomingo";
import AccesoLunes from "./pages/AccesoLunes";
import AccesoMartes from "./pages/AccesoMartes";
import AccesoMiercoles from "./pages/AccesoMiercoles";
import AccesoJueves from "./pages/AccesoJueves";
import AccesoViernes from "./pages/AccesoViernes";
import AccesosSabados from "./pages/AcessoSabado";
import AccesoDomingo from "./pages/AccesoDomingo";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState( );
  const [isAuthenticatedV, setIsAuthenticatedV] = useState( );
  const [isAuthenticatedS, setIsAuthenticatedS] = useState( );
    

  let elemento 
  if (isAuthenticated == true){
     return <Lunes />
     console.log(typeof (isAuthenticated));
  }else{
    elemento = <redirect to ='/alunes' />
  }

  let elementoV 
  if (isAuthenticatedV == true){
     return <Viernes />
     console.log(typeof (isAuthenticatedV));
  }else{
    elementoV = <redirect to ='/aviernes' />
  }


  let elementoS 
  if (isAuthenticatedS == true){
     return <Sabado />
     console.log(typeof (isAuthenticatedS));
  }else{
    elementoS = <redirect to ='/asabado' />
  }
  

  const router = createBrowserRouter([
    { path: '/', element: <Home /> },
    { path: '/alunes', element: <AccesoLunes setIsAuthenticated={setIsAuthenticated} /> },
    { path: '/aviernes', element: <AccesoViernes setIsAuthenticatedV={setIsAuthenticatedV} /> },
    { path: '/asabado', element: <AccesosSabados setIsAuthenticatedS={setIsAuthenticatedS} /> },
    { path: '/lunes', element: elemento },
    { path: '/martes', element: <AccesoMartes /> },
    { path: '/miercoles', element: <AccesoMiercoles />, },
    { path: '/jueves', element: <AccesoJueves />, },
    { path: '/viernes', element: elementoV, },
    { path: '/sabado', element: elementoS, },
    { path: '/domingo', element: <AccesoDomingo />, }
  ]);

  return (
    <div className="App">
      
      <br />
      <RouterProvider router={router} />
    </div>
  )
}

export default App;
