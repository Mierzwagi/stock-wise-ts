import api from "../api/api";


// ==== ITENS / SALAS ====
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

export const listSalas = async (): Promise<Sala[]> => {
  const response = await api.get(`/salas`);
  return response.data;
};




//==== AUTH ====

export interface SignUpBody {
  nome: string;
  email: string;
  senha: string;
}

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



//==== USER ====

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

export const usersRoleUpdate = async (id: number, newRole: string): Promise<void> => {
  const response = await api.patch(`/users/${id}`, {role: newRole});
  return response.data;
};

export const usersDelet = async (id: number): Promise<void> => {
  const response = await api.delete(`/users/${id}`);
  return response.data;
};