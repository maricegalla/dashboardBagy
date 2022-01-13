import axios from 'axios';


const REACT_APP_URL = "http://127.0.0.1:3003/";

const api = axios.create({
  baseURL: REACT_APP_URL,
});

export default api;