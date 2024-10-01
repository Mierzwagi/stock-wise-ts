import { Image, Trash } from "@phosphor-icons/react";
import { Item } from "../../server/endpoints";
import { DenominacaoDiv, DivContainer, ListContainer } from "./style";

//Recebendo a lista de Itens por Props
interface ItensProps {
  itens: Item[];
}

//React Functional Component onde recebe propriedades
export const List: React.FC<ItensProps> = ({ itens }) => {
  /*  //guandando os dados na lista
  const [itens, setItens] = useState<Item[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  //const [limit, setLimit] = useState<number>(10); */

  /* const fetchData = async () => {
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
  } */

  if (!Array.isArray(itens) || itens.length === 0) {
    return <p>Sem itens nesta sala</p>;
  }

  return (
    <>
      {itens.length === 0 ? (
        <p>Sem itens nesta sala</p>
      ) : (
        itens.map((item) => (
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
              <Image size={40} color="#5907AF" />
            </button>
          </ListContainer>
        ))
      )}
    </>
  );
};

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
