import { Image, Trash } from "@phosphor-icons/react";
import { DenominacaoDiv, DivContainer, ListContainer } from "./style";
import { useEffect, useState } from "react";
import { listItens, Item } from "../../endpoints";

export function List() {
  //guandando os dados na lista
  const [itens, setItens] = useState<Item[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  //const [limit, setLimit] = useState<number>(10);

  const fetchData = async () => {
    try {
      const response = await listItens();
      console.log(response);
      
      setItens(response);
    } catch (error) {
      //Fazer um TyAssertion informando para o TypeScript que o error é uma propriedade que desejo acessar
      const typedError = error as Error;
      setError(typedError.message);
    }finally{
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (loading) {
    return <p>Carregando...</p>;
  }

  if (error) {
    return <p>Erro: {error}</p>;
  }

  return (
    <>
      {itens.map((item) => (
        <ListContainer>
          <DivContainer key={item.externalId}>
            <strong>{item.externalId}</strong>
          </DivContainer>
          <DenominacaoDiv>
            <strong>{item.nome}</strong>
          </DenominacaoDiv>
          <DivContainer>
            <strong>{item.dataDeIncorporacao}</strong>
          </DivContainer>
          <button>
            <Image size={40} color="#5907AF" />
          </button>
        </ListContainer>
      ))}
    </>
  );

  /* return (
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
  ); */
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
