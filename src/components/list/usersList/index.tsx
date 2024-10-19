import { FaTrashCan } from "react-icons/fa6";
import { User } from "../../../server/endpoints";
import {
  DenominacaoDiv,
  DivContainer,
  HeaderContainer,
  HeaderTitle,
  HeaderTitleDenominacao,
  IMG,
  ItensContainer,
  ListContainer,
  SelectInput,
} from "../style/style";

type UserProps = {
  users: User[];
  deletUser: (userId: number) => void;
};

export const ListUser: React.FC<UserProps> = ({ users, deletUser }) => {

const handleDeletUser = (userId: number) => {
const confirmed = window.confirm('Certeza que deseja excluir esse usuário?');
if(confirmed){
  deletUser(userId);
}
}

  return (
    <ItensContainer>
      <HeaderContainer>
        <HeaderTitle>
          <strong>Nome</strong>
        </HeaderTitle>
        <HeaderTitleDenominacao>
          <strong>E-MAIL</strong>
        </HeaderTitleDenominacao>
        <HeaderTitle>
          <strong>NÍVEL</strong>
        </HeaderTitle>
        <IMG></IMG>
      </HeaderContainer>

      {users.map((user) => (
        <ListContainer key={user.id}>
          <DivContainer>
            <strong>{user.nome}</strong>
          </DivContainer>
          <DenominacaoDiv>
            <strong>{user.email}</strong>
          </DenominacaoDiv>
          
            <SelectInput>
              <option value="">USER</option>
              <option value="">ADMIN</option>
            </SelectInput>
  
          <button onClick={() => handleDeletUser(user.id)}>
            <FaTrashCan size={30} color="#5907AF" />
          </button>
        </ListContainer>
      ))}
    </ItensContainer>
  );
};
