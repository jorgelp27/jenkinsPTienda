import axios from 'axios';

const libreriaApi = axios.create({
    // baseURL: 'http://localhost:3000/api'
    baseURL: 'http://38.242.135.30:80/api'
});

export default libreriaApi