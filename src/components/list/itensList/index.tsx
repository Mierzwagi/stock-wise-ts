import { useMemo, useState } from "react";
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
import { ModalImage } from "../../modal/modalImg";

// Propriedades do componente
interface ItensProps {
  itens: Item[];
}

export const ListItens: React.FC<ItensProps> = ({ itens }) => {
  const [open, setOpen] = useState(false);
  const [selectedImageUrl, setSelectedImageUrl] = useState<string | null>(null);

  const approved = window.innerWidth <= 1200;

  // Ordenar itens por ID
  const orderItens = useMemo(() => {
    return [...itens].sort((a, b) => {
      return a.externalId - b.externalId;
    });
  }, [itens]);


  // Formatar data para o formato brasileiro
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("pt-BR", {
      timeZone: "America/Sao_Paulo",
    });
  };


  //Modal
  const handleOpen = (imgUrl: string) => {
    setSelectedImageUrl(imgUrl);
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
    setSelectedImageUrl(null);
  };


  // Renderizar mensagem de boas-vindas se não houver itens
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

    // Renderizar cabeçalhos dinamicamente
    const headers = [
      { label: "ID", component: <HeaderId><strong>ID</strong></HeaderId> },
      { label: "DENOMINAÇÃO", component: <HeaderTitleDenominacao><strong>DENOMINAÇÃO</strong></HeaderTitleDenominacao> },
      { label: "INCORPORAÇÃO", component: <HeaderIncorporacao><strong>INCORPORAÇÃO</strong></HeaderIncorporacao> },
      { label: "IMAGEM", component: <IMG /> },
    ];

  return (
    <ItensContainer>
      <HeaderContainer>
        {headers.map((header) => header.component)}
      </HeaderContainer>

      {orderItens.map((item) => (
        <ListContainer key={`${item.externalId}-${item.nome}`}>
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
            <FaImages size={25} color="#5907AF" />
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
