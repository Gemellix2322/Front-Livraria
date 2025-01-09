import axios from 'axios';

const api = axios.create({
    baseURL: process.env.REACT_APP_API_URL || 'http://localhost:5100'
});

// Log para debug
console.log('API URL:', process.env.REACT_APP_API_URL);

export default api;