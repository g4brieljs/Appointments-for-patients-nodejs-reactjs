import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import clienteAxios from './config/axios';

import Pacientes from './components/Pacientes';
import NuevaCita from './components/NuevaCita';
import Cita from './components/Cita';

function App() {

  // state de la app
  const [citas, guardarCitas] = useState([]);

  // este metodo se ejecuta desde que cargue la app
  // En versiones no habia hooks, now is useEffects, cuando la interfaz cargue por primera vez, o tenga algun cambio
  useEffect( () => {
    // consumimos la api desde aqui
    const consultarAPI = () => {
      clienteAxios.get('/pacientes')
        .then(respuesta => {
          // Colocar en el state el resultado
          guardarCitas(respuesta.data);
        })
        .catch(error => {
          console.log(error)
        })
    }
    consultarAPI();
  }, [] );
  // Dependency


  return (
    <Router>
      <Switch>
        <Route 
          exact path="/"
          // si visita la página "/"
          // llamamos al component > 
          component={Pacientes}
        />
        <Route 
          exact path="/new"
          component={NuevaCita}
        />
        <Route 
          exact path="/cita/id:"
          component={Cita}
        />
      </Switch>

    </Router>
  );
}

export default App;
