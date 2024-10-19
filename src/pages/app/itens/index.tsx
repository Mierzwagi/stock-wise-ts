import { useCallback, useEffect, useState } from "react";
import { ListItens } from "../../../components/list/itensList";
import { FaPaperclip } from "react-icons/fa6";
import { Item, listItens, listSalas, Sala } from "../../../server/endpoints";
import {
  HeaderContainer,
  IntensListContainer,
  ItensContainer,
  ListContainer,
  PaginationContainer,
  SelectInput,
} from "./style";
import { Pagination } from "../../../components/Pagination";
import { ButtonRound } from "../../../components/button";
import { MyModal } from "../../../components/modal";

export function Itens() {
  const [salas, setSalas] = useState<Sala[]>([]);
  const [itens, setItens] = useState<Item[]>([]);
  const [, setTotalItems] = useState<number>(0);
  const [totalPages, setTotalPages] = useState<number>(0);
  const [selectSala, setSelectSala] = useState<string>("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [open, setOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState<number>(1); // Página atual

  //Modal
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  //Buscando as Salas
  const fetchSala = async () => {
    try {
      const response = await listSalas(); //Requisição para API
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

  //Itens da sala selecionada
  //useCaallback: hook que memoriza a função não deixando que ela seja replicada a cada renderização
  const fetchItens = useCallback(
    async (localizacao: string, page: number = 1) => {
      console.log(`Buscando itens para sala ${localizacao}, página ${page}`);
      try {
        const response = await listItens(localizacao, page.toString()); // Faz a requisição buscando a sala com a qnt de páginas
        if (response) {
          console.log("Itens recebidos da API:", response);
          setItens(response.data);
          setTotalItems(response.totalItems); // Atualiza o total de itens em cada sala
          setTotalPages(response.totalPages); // Atualiza o total de páginas
        } else {
          setItens([]); //limpa a lista
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

  //Bucas os iten sao mudas a sala
  useEffect(() => {
    if (selectSala) {
      console.log("Sala selecionada mudou:", selectSala);
      fetchItens(selectSala, currentPage); //Busca os itens de acordo com a sala e a página selecionada
    } else {
      setItens([]);
    }
  }, [selectSala, currentPage, fetchItens]);

  if (loading) {
    return <p>Carregando...</p>;
  }

  if (error) {
    return <p>Erro: {error}</p>;
  }

  //Função para mudar a sala// eVentos que manipula elementos de seleção como <select>
  const handleSalaChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const salaId = e.target.value;
    console.log("sala selecionada", salaId);
    setSelectSala(salaId); //Atualiza de acordo com a sala selecionada
    setCurrentPage(1); // Reseta a página atual ao mudar de sala
  };

  //Exibição do nome da sala
  const selectedSala = salas.find(
    (sala) => String(sala.localizacao) === selectSala
  );

  return (
    <ItensContainer>
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
        <ListItens itens={itens} />
      </ListContainer>

      <PaginationContainer>
        <Pagination
          currentPage={currentPage}
          onPageChange={setCurrentPage}
          totalPages={totalPages}
        />
        <ButtonRound onClick={handleOpen}>
          <FaPaperclip size={30} />
        </ButtonRound>
      </PaginationContainer>
      <MyModal isOpen={open} handleClose={handleClose} />
    </ItensContainer>
  );
}
