import AxiosService from "./AxiosService";

const GetBatalhas = async (payload) => {
  const response = await AxiosService.get("/Batalha", {params: payload});
  return response.data;
};

const GetBatalhaById = async (payload) => {
  const response = await AxiosService.get("/Batalha/GetBatalhaById", {params: payload});
  return response.data;
};

const CriarBatalha = async (payload) => {
  const response = await AxiosService.post("/Batalha/CriarBatalha", payload);
  return response.data;
};

const EditarBatalha = async (payload) => {
  const response = await AxiosService.post('/Batalha/EditarBatalha', payload);
  return response.data;
};

const ExcluirBatalha = async (payload) => {
  const response = await AxiosService.delete("/Batalha/ExcluirBatalha", payload);
  return response.data;
};

export default {
  GetBatalhas,
  GetBatalhaById,
  CriarBatalha,
  EditarBatalha,
  ExcluirBatalha
};
