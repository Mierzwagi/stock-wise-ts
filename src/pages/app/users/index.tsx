import { ListUser } from "../../../components/list";
import { UsersContainer, UserTitle } from "./style";

export function Users() {
  return (
    <UsersContainer>
      <h2>Usuários</h2>
      <UserTitle>
        <h4>Nome</h4>
        <h4>E-mail</h4>
        <h4>Nível</h4>
      </UserTitle>
      <ListUser />
    </UsersContainer>
  );
}
