import Axios from 'axios';
import enviroment from '../enviroments';

const createAxiosInstance = () => {
    let config = {
      baseURL: enviroment.API_URL,
      timeout: 30000,
    };
    const instance = Axios.create(config);

    return instance;
  };

  export default {createAxiosInstance};