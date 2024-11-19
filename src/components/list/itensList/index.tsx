import { FaImages } from "react-icons/fa6";
import { Item } from "../../../server/endpoints";
import ImgWelcome from "../../../assets/images/img-welcome1.svg";
import ImgWelcomeTbt from "../../../assets/images/img-welcome-tbt.svg";
import {
  DenominacaoDiv,
  DivId,
  DivIncorporacao,
  HeaderContainer,
  HeaderId,
  HeaderIncorporacao,
  HeaderTitleDenominacao,
  IMG,
  ItensContainer,
  ListContainer,
  WelcomeContainer,
} from "../style/style";
import { useState } from "react";
import { ModalImage } from "../../modal/modalImg";

//Recebendo a lista de Itens por Props
interface ItensProps {
  itens: Item[];
}

//React Functional Component onde recebe propriedades
export const ListItens: React.FC<ItensProps> = ({ itens }) => {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("pt-BR", {
      timeZone: "America/Sao_Paulo",
    });
  };

  const [open, setOpen] = useState(false);
  const [selectedImageUrl, setSelectedImageUrl] = useState<string | null>(null);
  const approved = window.innerWidth <= 1200;

  //Modal
  const handleOpen = (imgUrl: string) => {
    setSelectedImageUrl(imgUrl);
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
    setSelectedImageUrl(null);
  };

  if (!Array.isArray(itens) || itens.length === 0) {
    return (
      <WelcomeContainer>
        <h1>StockWise</h1>
        <div>
          <img src={approved ? ImgWelcomeTbt : ImgWelcome} alt="" />
        </div>
      </WelcomeContainer>
    );
  }

  return (
    <ItensContainer>
      <HeaderContainer>
        <HeaderId>
          <strong>ID</strong>
        </HeaderId>
        <HeaderTitleDenominacao>
          <strong>DENOMINAÇÃO</strong>
        </HeaderTitleDenominacao>
        <HeaderIncorporacao>
          <strong>INCORPORAÇÃO</strong>
        </HeaderIncorporacao>
        <IMG></IMG>
      </HeaderContainer>

      {itens.map((item) => (
        <ListContainer key={item.externalId}>
          <DivId>
            <strong>{item.externalId}</strong>
          </DivId>
          <DenominacaoDiv>
            <strong>{item.nome}</strong>
          </DenominacaoDiv>
          <DivIncorporacao>
            <strong>{formatDate(item.dataDeIncorporacao)}</strong>
          </DivIncorporacao>
          <button onClick={() => handleOpen(item.url)}>
            <FaImages size={30} color="#5907AF" />
          </button>
        </ListContainer>
      ))}
      <ModalImage
        isOpen={open}
        handleClose={handleClose}
        imgUrl={selectedImageUrl}
      />
    </ItensContainer>
  );
};
