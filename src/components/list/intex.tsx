import { Image, Trash } from "@phosphor-icons/react";
import { DenominacaoDiv, DivContainer, ListContainer } from "./style";
import { useEffect } from "react";
import { listItens } from "../../endPoints";

export function List() {
  const fetchData = async () => {
    const response = await listItens("4");
    console.log(response);
  };

  useEffect(() => {
    fetchData();
  });

  return (
    <ListContainer>
      <DivContainer>
        <strong>111111</strong>
      </DivContainer>
      <DenominacaoDiv>
        <strong>MESA P/INFORMÁTICA 1600MM ÁRTICO DC-1661/ LACHI</strong>
      </DenominacaoDiv>
      <DivContainer>
        <strong>111111</strong>
      </DivContainer>
      <button>
        <Image size={40} color="#5907AF" />
      </button>
    </ListContainer>
  );
}

export function ListUser() {
  return (
    <ListContainer>
      <DivContainer>
        <strong>111111</strong>
      </DivContainer>
      <DivContainer>
        <strong>111111</strong>
      </DivContainer>
      <DivContainer>
        <strong>111111</strong>
      </DivContainer>
      <button>
        <Trash size={40} color="#5907AF" />
      </button>
    </ListContainer>
  );
}
