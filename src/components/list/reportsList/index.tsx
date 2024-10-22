import { FaFilePdf } from "react-icons/fa6";
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

export const ListReports: React.FC = () => {
  return (
    <ItensContainer>
      <HeaderContainer>
        <HeaderTitle>
          <strong>Data</strong>
        </HeaderTitle>
        <HeaderTitleDenominacao>
          <strong>Relatório</strong>
        </HeaderTitleDenominacao>
        <IMG></IMG>
      </HeaderContainer>

      <ListContainer>
        <DivContainer>
          <strong>DD/MM/YY</strong>
        </DivContainer>
        <DenominacaoDiv>
          <strong>Relatório sala xxxxxx</strong>
        </DenominacaoDiv>
        <button>
          <FaFilePdf size={30} color="#5907AF" />
        </button>
      </ListContainer>
    </ItensContainer>
  );
};
