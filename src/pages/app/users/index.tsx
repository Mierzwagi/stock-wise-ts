import { useCallback, useEffect, useState } from "react";
import { ListUser } from "../../../components/list/usersList";
import { User, usersDelet, usersRequest, usersRoleUpdate } from "../../../server/endpoints";
import { HeaderContainer, ListContainer, PaginationContainer, UsersContainer } from "./style";
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
      const response = await usersRequest(page.toString());
      if (response) {
        console.log("Usuários recebidos da API:", response);
        setUsers(response.data);
        setTotalPages(response.totalPages);
      } else {
        setUsers([]);
        setError("Não foi possível carregar os usuários.");
      }
    } catch (error) {
      const typedError = error as Error;
      setError(typedError.message);
    } finally {
      setLoading(false);
    }
  }, []);

    //Alterando o nível do usuário
    const updateUserRole = async (id: number, newRole: string) => {
      try {
        await usersRoleUpdate(id, newRole);//Requisição para API passando o id do usuário e o novo nível
        //Verificando se o id do usuário é o mesmo que estou alterando, pegando as props dele e alterando o 'role' por 'newRole'
        const updateUsers = users.map((user) => user.id === id ? { ...user, role: newRole } : user)
        console.log(updateUsers);
        console.log(newRole);
        
        setUsers(updateUsers);
      } catch (error) {
        const typedError = error as Error;
        setError(typedError.message);
      } finally {
        setLoading(false);
      }
    }


  //Deletar usuário
  const deletUser = async (id: number) => {
    try {
      await usersDelet(id); 
      //Criando uma nova lista de users cujo o ID seja diferente do qual foi excluido
      const updateUsers = users.filter((user) => user.id !== id);
      setUsers(updateUsers); //Setando a lista de users
    } catch (error) {
      const typedError = error as Error;
      setError(typedError.message);
    } finally {
      setLoading(false);
    }
  }

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
      <HeaderContainer>
        <h1>Usuários</h1>
      </HeaderContainer>
      <ListContainer>
        <ListUser users={users} deletUser={deletUser} updateUserRole={updateUserRole}/>
      </ListContainer>
      <PaginationContainer>
        <Pagination
          currentPage={currentPage}
          onPageChange={setCurrentPage}
          totalPages={totalPages}
        />
      </PaginationContainer>
    </UsersContainer>
  );
}
