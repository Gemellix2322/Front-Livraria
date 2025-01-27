import axios from 'axios';

export const api = axios.create({
    baseURL: process.env.REACT_APP_API_URL || 'http://localhost:5100'
});

export const apicsharp = axios.create({
    baseURL: process.env.CSHARP_API_URL || 'http://localhost:5109'
})

// Log para debug
console.log('API URL:', process.env.REACT_APP_API_URL);

export default api;