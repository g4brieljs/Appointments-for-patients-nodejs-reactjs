import axios from 'axios';

const clienteAxios = axios.create({
  // definimos la url base, en vez de :3000 una vez se lleve a produccion eliminaos el puerto\
  // variables de entorno
  baseURL: process.env.REACT_APP_BACKEND_URL
  // esto sera nuestro cliente de axio nos ayuda a no tener uqe escribir siempre el dominio
});

// Esta variable nos permite usar este clientAxio con una url base para un mejor deployment

export default clienteAxios;