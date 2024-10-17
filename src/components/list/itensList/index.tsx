import { FaImages } from "react-icons/fa6";
import { Item } from "../../../server/endpoints";
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

//Recebendo a lista de Itens por Props
interface ItensProps {
  itens: Item[];
}

//React Functional Component onde recebe propriedades
export const ListItens: React.FC<ItensProps> = ({ itens }) => {
  if (!Array.isArray(itens) || itens.length === 0) {
    return <p>Sem itens nesta sala</p>;
  }

  return (
    <ItensContainer>
      <HeaderContainer>
        <HeaderTitle>
          <strong>ID</strong>
        </HeaderTitle>
        <HeaderTitleDenominacao>
          <strong>DENOMINAÇÃO</strong>
        </HeaderTitleDenominacao>
        <HeaderTitle>
          <strong>INCORPORAÇÃO</strong>
        </HeaderTitle>
        <IMG></IMG>
      </HeaderContainer>

      {itens.map((item) => (
        <ListContainer key={item.externalId}>
          <DivContainer>
            <strong>{item.externalId}</strong>
          </DivContainer>
          <DenominacaoDiv>
            <strong>{item.nome}</strong>
          </DenominacaoDiv>
          <DivContainer>
            <strong>{item.dataDeIncorporacao}</strong>
          </DivContainer>
          <button>
            <FaImages size={30} color="#5907AF" />
          </button>
        </ListContainer>
      ))}
    </ItensContainer>
  );
};