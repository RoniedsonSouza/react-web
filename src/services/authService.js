import AxiosService from './AxiosService';

const Login = async (payload) => {
  const response = await AxiosService.post('/Auth/Login', payload);
  return response.data;
};

const Cadastrar = async (payload) => {
  const response = await AxiosService.post('/Auth/Register', payload);
  return response.data;
};

// const ChangePassword = async (obj: Object) => {
//
//   const response = await AxiosService.post('/Seguranca/AlteraSenha', obj);
//   response.data;
// };

const DeslogarUsuario = async () => {
  const response = await AxiosService.post('/Auth/DeslogarUsuario');
  return response.data;
};

export default {
  Login,
  Cadastrar,
  DeslogarUsuario
};
