import { useCallback, useEffect, useState } from "react";
import { ListUser } from "../../../components/list/usersList";
import { User, usersRequest } from "../../../server/endpoints";
import { UsersContainer } from "./style";
import { Pagination } from "../../../components/Pagination";

export function Users() {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [totalPages, setTotalPages] = useState<number>(0);
  const [currentPage, setCurrentPage] = useState<number>(1);

  const fetchUsers = useCallback(async (page: number = 1) => {
    setLoading(true);
    try {
      const response = await usersRequest(page.toString());//Requeisição para API, passando a página inícial
      if (response) {
        console.log("Usuários recebidos da API:", response);
        setUsers(response.data); //Lista os users
        setTotalPages(response.totalPages);
      } else {
        setUsers([]);//Limpar a lista caso não receba
        setError("Não foi possível carregar os usuários.");
      }
    } catch (error) {
      const typedError = error as Error;
      setError(typedError.message);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchUsers(currentPage); //Armazena a pagina atual toda vez que mudada
  }, [currentPage, fetchUsers]);

  if (loading) {
    return <p>Carregando...</p>;
  }

  if (error) {
    return <p>Erro: {error}</p>;
  }

  return (
    <UsersContainer>
      <ListUser users={users} />
      <Pagination currentPage={currentPage} onPageChange={setCurrentPage} totalPages={totalPages} />
    </UsersContainer>
  );
}
