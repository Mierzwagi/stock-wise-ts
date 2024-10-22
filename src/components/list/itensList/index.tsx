import { FaImages } from "react-icons/fa6";
import { Item } from "../../../server/endpoints";
import ImgWelcome from "../../../assets/images/img-welcome1.svg"
import {
  DenominacaoDiv,
  DivContainer,
  HeaderContainer,
  HeaderTitle,
  HeaderTitleDenominacao,
  IMG,
  ItensContainer,
  ListContainer,
  WelcomeContainer
} from "../style/style";

//Recebendo a lista de Itens por Props
interface ItensProps {
  itens: Item[];
}

//React Functional Component onde recebe propriedades
export const ListItens: React.FC<ItensProps> = ({ itens }) => {
  if (!Array.isArray(itens) || itens.length === 0) {
    return (
      <WelcomeContainer>
        <h1>StockWise</h1>
        <div>
          <img src={ImgWelcome} alt="" />
        </div>
      </WelcomeContainer>
    );
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