import { FaTrashCan } from "react-icons/fa6";
import { User } from "../../../server/endpoints";

import {
  DenominacaoDiv,
  DivId,
  HeaderContainer,
  HeaderId,
  HeaderTitleDenominacao,
  IMG,
  ItensContainer,
  ListContainer,
  SelectInput,
} from "../style/style";

type UserProps = {
  users: User[];
  deletUser: (userId: number) => void;
  updateUserRole: (userId: number, newRole: string) => void;
};

const headers = [
  { label: "NOME", component: <HeaderId><strong>NOME</strong></HeaderId> },
  { label: "E-MAIL", component: <HeaderTitleDenominacao><strong>E-MAIL</strong></HeaderTitleDenominacao> },
  { label: "NÍVEL", component: <HeaderId><strong>NÍVEL</strong></HeaderId> },
  { label: "IMAGEM", component: <IMG /> },
];

export const ListUser: React.FC<UserProps> = ({
  users,
  deletUser,
  updateUserRole,
}) => {
  const handleUpdateUserRole = (userId: number, newRole: string) => {
    updateUserRole(userId, newRole);
  };

  const handleDeletUser = (userId: number) => {
    const confirmed = window.confirm(
      "Certeza que deseja excluir esse usuário?"
    );
    if (confirmed) {
      deletUser(userId);
    }
  };

  return (
    <ItensContainer>
      <HeaderContainer>
        {headers.map((header) => header.component)}
      </HeaderContainer>

      {users.map((user) => (
        <ListContainer key={user.id}>
          <DivId>
            <strong>{user.nome}</strong>
          </DivId>
          <DenominacaoDiv>
            <strong>{user.email}</strong>
          </DenominacaoDiv>

          <SelectInput
            value={user.role}
            onChange={(e) => handleUpdateUserRole(user.id, e.target.value)}
          >
            <option value="USER">USUÁRIO</option>
            <option value="ADMIN">ADMINISTRADOR</option>
          </SelectInput>

          <button onClick={() => handleDeletUser(user.id)}>
            <FaTrashCan size={22} color="#5907AF" />
          </button>
        </ListContainer>
      ))}
    </ItensContainer>
  );
};
