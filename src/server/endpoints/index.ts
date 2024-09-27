import api from "../api/api";

export interface Item {
  externalId: number;
  nome: string;
  dataDeIncorporacao: string;
  salaId: string;
  url: string;
}

export const listItens = async (page?:string, limit?:string): Promise<Item[]> => {
  const response = await api.get(
    `/itens?page=${page}&limit=${limit || 10}`
  );
  return response.data.data;
};

export interface Pageable<T> {
  data: T[];
  totalItems: number;
  totalPages: number;
  currentPage: number;
}

//Pageable<Itens>

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

export const listItensSalas = async (): Promise<Item[]> => {
    const response = await api.get(`/itens`);
  return response.data.data;
}
