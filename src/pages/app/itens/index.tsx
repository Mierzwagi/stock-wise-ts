/* eslint-disable @typescript-eslint/no-unused-vars */
import { useCallback, useEffect, useState } from "react";
//import { List } from "../../../components/list";
import { List } from "../../../components/list";
import { FaPaperclip } from "react-icons/fa6";
import { Item, listItens, listSalas, Sala } from "../../../server/endpoints";
import {
  HeaderContainer,
  IntensListContainer,
  ItensContainer,
  ListContainer,
  PaginationButton,
  SelectInput,
} from "./style";
import { createContext } from "use-context-selector";
import { Pagination } from "../../../components/Pagination";
import { ButtonRound } from "../../../components/button";
import { MyModal } from "../../../components/modal";

interface ItensContextType {
  fetchItens: (salaId: string, page?: number) => void;
  selectSala: string;
  totalPages: number;
}

export const ItensContext = createContext({} as ItensContextType);

export function Itens() {
  const [salas, setSalas] = useState<Sala[]>([]);
  const [itens, setItens] = useState<Item[]>([]);
  const [totalItems, setTotalItems] = useState<number>(0);
  const [totalPages, setTotalPages] = useState<number>(0);
  const [selectSala, setSelectSala] = useState<string>("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  

  const fetchSala = async () => {
    try {
      const response = await listSalas();
      console.log("Salas:", response);

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
  const fetchItens = useCallback(
    async (localizacao: string, page: number = 1) => {
      console.log(`Buscando itens para sala ${localizacao}, página ${page}`);
      try {
        const response = await listItens(localizacao, page.toString());
        if (response) {
          console.log("Itens recebidos da API:", response);
          setItens(response.data);
          setTotalItems(response.totalItems);
          setTotalPages(response.totalPages);
        } else {
          setItens([]);
          setError("Não foi possível carregar os itens.");
        }
      } catch (error) {
        const typedError = error as Error;
        setError(typedError.message);
      } finally {
        setLoading(false);
      }
    },
    []
  );

  useEffect(() => {
    fetchSala();
  }, []);

  useEffect(() => {
    if (selectSala) {
      console.log("Sala selecionada mudou:", selectSala);
      fetchItens(selectSala); // Chama a busca quando a sala é selecionada
    } else {
      setItens([]);
    }
  }, [selectSala, fetchItens]);

  if (loading) {
    return <p>Carregando...</p>;
  }

  if (error) {
    return <p>Erro: {error}</p>;
  }

  //Criando a função para quando o usuário selecionar a sela
  const handleSalaChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const salaId = e.target.value;
    console.log("sala selecionada", salaId);
    setSelectSala(salaId);
    //fetchItens(salaId); // Buscar itens da sala selecionada
  };

  const selectedSala = salas.find(
    (sala) => String(sala.localizacao) === selectSala
  );

  return (
    <ItensContainer>
      <ItensContext.Provider
        value={{
          fetchItens,
          selectSala,
          totalPages,
        }}
      >
        <HeaderContainer>
          <IntensListContainer>
            {selectedSala && <h3>{selectedSala.nome}</h3>}
          </IntensListContainer>
         
            <SelectInput value={selectSala} onChange={handleSalaChange}>
              {salas.map((sala) => (
                <option key={sala.localizacao} value={sala.localizacao}>
                  {sala.nome}
                </option>
              ))}
            </SelectInput>
        
        </HeaderContainer>
        <ListContainer>
          <List itens={itens} />
        </ListContainer>

        <PaginationButton>
          <Pagination />
          <ButtonRound  onClick={handleOpen}>
            <FaPaperclip size={30} />
          </ButtonRound>
        </PaginationButton>
        <MyModal isOpen={open} handleClose={handleClose} />
      </ItensContext.Provider>
    </ItensContainer>
  );
}
