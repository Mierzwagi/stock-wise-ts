import api from "../api/api";

export interface Item {
  externalId: number;
  nome: string;
  dataDeIncorporacao: string;
  salaId: string;
  url: string;
}

export interface Pageable<T> {
  data: T[];
  totalItems: number;
  totalPages: number;
  currentPage: number;
}

export const listItens = async (localizacao?: string, page:string = '1'): Promise<Pageable<Item>> => {
  console.log(`/salas/${localizacao}/itens?page=${page}`);
  const response = await api.get(
    `/salas/${localizacao}/itens?page=${page}`    
  );
  return {
    data: response.data.data, // Itens
    totalItems: response.data.totalItems, // Total de itens
    totalPages: response.data.totalPages, // Total de páginas
    currentPage: response.data.currentPage, // Página atual
  };
  
};



export interface Sala {
  id: number;
  localizacao: number;
  nome: string;
  quantidadeDeItens: string;
}

/* export const listSalas = async (page: number = 1, limit: number = 100): Promise<Sala[]> => {
  const response = await api.get(`/salas?page=${page}&limit=${limit}`);
  return response.data.data;
}; */

export const listSalas = async (): Promise<Sala[]> => {
  const response = await api.get(`/salas`);
  return response.data;
};

export const listItensSalas = async (): Promise<Item[]> => {
    const response = await api.get(`/itens`);
  return response.data.data;
}
