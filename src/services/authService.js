import AxiosService from './AxiosService';

const Login = async (payload) => {
  const newinstance = AxiosService.createAxiosInstance();
  const response = await newinstance.post('/Auth/Login', payload);
  return response.data;
};

// const ChangePassword = async (obj: Object) => {
//   const newinstance = AxiosService.createAxiosInstance();
//   const response = await newinstance.post('/Seguranca/AlteraSenha', obj);
//   response.data;
// };

// const DeslogarUsuario = async (usuario) => {
//   const newinstance = AxiosService.createAxiosInstance();
//   const response = await newinstance.post('/Seguranca/DeslogaUsuario', usuario);
//   response.data;
// };

export default {
  Login
  // ChangePassword,
  //DeslogarUsuario,
};
