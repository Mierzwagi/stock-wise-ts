import { useEffect, useState } from "react";
import { List } from "../../../components/list";
import { Item, listItens, listSalas, Sala } from "../../../server/endpoints";
import {
  IntensListContainer,
  ItensContainer,
  SelectContainer,
  SelectInput
} from "./style";

export function Itens() {
  const [salas, setSalas] = useState<Sala[]>([]);
  const [itens, setItens] = useState<Item[]>([]);
  const [selectSala, setSelectSala] = useState<string>("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fechtData = async () => {
    try {
      //todas as salas recuperadas da API e armazenadas em Sala[]
      let allSalas: Sala[] = [];
      let page = 1;
      ////iniciando o loop
      let hasMore = true;

      //o loop irá continuar até não haver mais salas para recuperar (hasMore === false)
      while (hasMore) {
        const response = await listSalas(page);
        console.log(response);

        //Verifica se a API retornou alguma sala
        if (response.length > 0) {
          //As salas retornadas são armazenadas em allSalas e todos os 'elementos' ...response serão add nela
          allSalas = [...allSalas, ...response];
          page++;
        } else {
          hasMore = false;
        }
      }

      setSalas(allSalas);

      //Definindo a primeira sala como selecionada:
      if(allSalas.length > 0){
        const firstSalaId = String(allSalas[0].id);
        setSelectSala(firstSalaId);
        fetchItens(firstSalaId)
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
    fechtData();
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


  return (
    <ItensContainer>
      <SelectContainer>
        <SelectInput value={selectSala} onChange={handleSalaChange}>      
          {salas.map((sala) => (
            <option key={sala.id} value={sala.id}>
              {sala.nome}
            </option>
          ))}
        </SelectInput>
      </SelectContainer>

      <IntensListContainer>
        <h2>Itens da Sala</h2>
        <List itens={itens}/>
      </IntensListContainer>
    </ItensContainer>
  );
}
