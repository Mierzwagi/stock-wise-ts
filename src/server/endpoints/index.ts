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

export const listItens = async (
  localizacao?: string,
  page: string = "1"
): Promise<Pageable<Item>> => {
  console.log(`/salas/${localizacao}/itens?page=${page}`);
  const response = await api.get(`/salas/${localizacao}/itens?page=${page}`);
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

export interface SignUpBody {
  nome: string;
  email: string;
  senha: string;
}
/* export const signUp = async (nome: string, email: string, password: string, role: string = 'USER' ): Promise<SignUpBody[]> => {
  const response = await api.post('/auth/signup');
  return response.data;
}; */

export async function signUp({ nome, email, senha }: SignUpBody) {
  console.log("Dados enviados para o cadastro:", { nome, email, senha });

  try {
    const response = await api.post("/auth/signup", {
      nome,
      email,
      senha,
    });
    return response.data;
  } catch (error) {
    console.error("Erro ao cadastrar:", error);
    throw error;
  }
}

export const signIn = async (email: string, senha: string) => {
  /* pq ce colocou a rota de login com get wuaaaa */
  const response = await api.post(`/auth/login`, { email, senha });
  return response.data;
};

export interface User {
  id: number;
  nome: string;
  email: string;
  role: string;
}

export const usersRequest = async (page: string): Promise<Pageable<User>> => {
  const response = await api.get(`/users?page=${page}`);
  return response.data;
};
