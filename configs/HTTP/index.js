import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:4200/api/v1',
});

export default instance;
