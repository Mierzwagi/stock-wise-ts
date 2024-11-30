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
  page: string = "1",
  itemsPerPage: number = 20,
  nome: string = ""
): Promise<Pageable<Item>> => {
  console.log(`/salas/${localizacao}/itens?page=${page}`);
  const response = await api.get(
    `/salas/${localizacao}/itens?page=${page}&limit=${itemsPerPage}&search=${nome}`
  );
  return {
    data: response.data.data, // Itens
    totalItems: response.data.totalItems, // Total de itens
    totalPages: response.data.totalPages, // Total de páginas
    currentPage: response.data.currentPage, // Página atual
  };
};

export const searchItens = async (
  localizacao: number,
  nome: string
): Promise<Item> => {
  const response = await api.get(`/sala//itens?`);
  return response.data;
};

// ==== SALAS ====

export interface Sala {
  id: number;
  localizacao: number;
  nome: string;
  quantidadeDeItens: string;
  pdfUrl: string;
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

export const usersRoleUpdate = async (
  id: number,
  newRole: string
): Promise<void> => {
  const response = await api.patch(`/users/${id}`, { role: newRole });
  return response.data;
};

export const usersDelet = async (id: number): Promise<void> => {
  const response = await api.delete(`/users/${id}`);
  return response.data;
};

// ==== DOCS ====
export const uploadFile = async (file: File): Promise<void> => {
  //Permite mandar um arquivo através de um arequisição
  const formData = new FormData();
  formData.append("file", file);

  try {
    const response = await api.post(`/seed/createItens`, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    console.log("Arquivo anexado com sucesso", response.data);
  } catch (error) {
    console.error("Erro ao anexzar o arquivo", error);
    throw error;
  }
};

export interface Report {
  id: number;
  nome: string;
  status: string;
  url: string;
  salaId: string;
  dataCriacao: string;
}

export const listReports = async (
  localizacao?: string,
  page: string = "1",
  dataCriacao?: string
): Promise<Pageable<Report>> => {
  console.log(
    `/salas/${localizacao}/relatorios?page=${page}&dataCriacao=${dataCriacao}`
  );
  const response = await api.get(
    `/salas/${localizacao}/relatorios?page=${page}&dataCriacao=${dataCriacao}`
  );
  return {
    data: response.data.data,
    totalItems: response.data.totalItems,
    totalPages: response.data.totalPages,
    currentPage: response.data.currentPage,
  };
};

export const allReports = async (): Promise<Pageable<Report>> => {
  const response = await api.get(`/relatorios`);
  return response.data;
};
