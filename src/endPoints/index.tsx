import api from "../../conectionsAPI/api";

interface Item {
  externalId: number;
  dataDeIncorporacao: string;
  salaId: string;
  url: string;
}

export const listItens = async (
  page?: string,
  limit?: string
): Promise<Item[]> => {
  const response = await api.get(
    `/itens?page=${page || 1}&limit=${limit || 10}`
  );
  return response.data.data;
};

interface Sala {
  id: number;
  localizacao: number;
  nome: string;
  quantidadeDeItens: string;
}

export const listSalas = async (): Promise<Sala[]> => {
  const response = await api.get(`/salas`);
  return response.data.data;
};

export const listItensSalas = async (localizacao:string): Promise<Item[]> => {
    const response = await api.get(`/salas/${localizacao}/itens`);
  return response.data.data;
}
