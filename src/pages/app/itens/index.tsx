import { useEffect, useState } from "react";
//import { List } from "../../../components/list";
import { List } from "../../../components/list";
import { Item, listItens, listSalas, Sala } from "../../../server/endpoints";
import {
  HeaderContainer,
  IntensListContainer,
  ItensContainer,
  SelectContainer,
  SelectInput,
} from "./style";

export function Itens() {
  const [salas, setSalas] = useState<Sala[]>([]);
  const [itens, setItens] = useState<Item[]>([]);
  const [selectSala, setSelectSala] = useState<string>("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchData = async () => {
    try {
      const response = await listSalas();
      console.log(response);

      if (Array.isArray(response)) {
        setSalas(response);
      } else {
        setSalas([]);
        setError("Não foi possível carregar as salas.");
      }
    } catch (error) {
      const typedError = error as Error;
      setError(typedError.message);
    } finally {
      setLoading(false);
    }
  };

  //Item da sala selecionada
  const fetchItens = async (salaId: string) => {
    setLoading(true);
    try {
      const response = await listItens(salaId);
      setItens(response);
    } catch (error) {
      const typedError = error as Error;
      setError(typedError.message);
    } finally {
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

  //Criando a função para quando o usuário selecionar a sela
  const handleSalaChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const salaId = e.target.value;
    setSelectSala(salaId);
    fetchItens(salaId); // Buscar itens da sala selecionada
  };

  const selectedSala = salas.find((sala) => String(sala.id) === selectSala);

  return (
    <ItensContainer>
      <HeaderContainer>
        <IntensListContainer>
          {selectedSala && <h3>{selectedSala.nome}</h3>}
        </IntensListContainer>
        <SelectContainer>
          <SelectInput value={selectSala} onChange={handleSalaChange}>
            {salas.map((sala) => (
              <option key={sala.id} value={sala.id}>
                {sala.nome}
              </option>
            ))}
          </SelectInput>
        </SelectContainer>
      </HeaderContainer>

      <List itens={itens} />
    </ItensContainer>
  );
}
