import { FaImages, FaTrashCan } from "react-icons/fa6";
import { Item } from "../../server/endpoints";
import {
  DenominacaoDiv,
  DivContainer,
  HeaderContainer,
  HeaderTitle,
  HeaderTitleDenominacao,
  IMG,
  ListContainer,
} from "./style";
import { ListItensContainer } from "../../pages/app/itens/style";

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
    <ListItensContainer>
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
      
    </ListItensContainer>
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
        <FaTrashCan size={30} color="#5907AF" />
      </button>
    </ListContainer>
  );
}
