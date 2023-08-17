import axios from 'axios'
import config from './config';

const axiosClient = axios.create({
    baseURL: config.VITE_API_BASE_URL,
});

export default axiosClient