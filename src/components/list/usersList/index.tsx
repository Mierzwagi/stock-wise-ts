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
} from "../style/style";

type UserProps = {
  users: User[];
};


export const ListUser: React.FC<UserProps> = ({ users }) => {
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
            <DivContainer>
              <strong>{user.role}</strong>
            </DivContainer>
            <button>
              <FaTrashCan size={30} color="#5907AF" />
            </button>
          </ListContainer>
        ))}
      </ItensContainer>
    );
  };