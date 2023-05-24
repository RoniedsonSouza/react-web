import Axios from "axios";
import enviroment from "../enviroments";

var token = localStorage.getItem("token");

let config = {
  baseURL: enviroment.API_URL,
  timeout: 30000
};

const instance = Axios.create(config);
instance.defaults.headers.Authorization = `Bearer ${token}`;

const requestInterceptor = config => {
  config.headers['Content-Type'] = 'application/json';
  config.headers['X-Client'] = 'React';
  config.headers['Authorization'] = `Bearer ${token}`;
  return config;
}

instance.interceptors.request.use(requestInterceptor);


export default instance;
