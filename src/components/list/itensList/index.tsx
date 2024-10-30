import { FaImages } from "react-icons/fa6";
import { Item } from "../../../server/endpoints";
import ImgWelcome from "../../../assets/images/img-welcome1.svg";
import {
  DenominacaoDiv,
  DivContainer,
  HeaderContainer,
  HeaderTitle,
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
    return date.toLocaleDateString('pt-BR', {
      timeZone: 'America/Sao_Paulo', 
    });
  };

  const [open, setOpen] = useState(false);
  const [selectedImageUrl, setSelectedImageUrl] = useState<string | null>(null);

  //Modal
  const handleOpen = (imgUrl: string) => {
    setSelectedImageUrl(imgUrl);
    setOpen(true);
  };
  const handleClose = () =>{
    setOpen(false);
    setSelectedImageUrl(null)
  }

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
            <strong>{formatDate(item.dataDeIncorporacao)}</strong>
          </DivContainer>
          <button onClick={() => handleOpen(item.url)}>
            <FaImages size={30} color="#5907AF" />
          </button>
        </ListContainer>
      ))}
      <ModalImage isOpen={open} handleClose={handleClose} imgUrl={selectedImageUrl} />
    </ItensContainer>
  );
};
