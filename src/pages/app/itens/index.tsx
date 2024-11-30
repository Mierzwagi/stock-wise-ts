import { useCallback, useEffect, useState } from "react";
import { ListItens } from "../../../components/list/itensList";
import { FaPaperclip } from "react-icons/fa6";
import { Item, listItens, listSalas, Sala } from "../../../server/endpoints";
import {
  HeaderContainer,
  HeaderInput,
  IntensListContainer,
  ItensContainer,
  ListContainer,
  PaginationContainer,
  SelectInput,
} from "./style";
import { Pagination } from "../../../components/Pagination";
import { ButtonRound } from "../../../components/button";
import { ModalUpload } from "../../../components/modal/modalAnexo";

export function Itens() {
  const [salas, setSalas] = useState<Sala[]>([]);
  const [itens, setItens] = useState<Item[]>([]);
  const [totalItens, setTotalItems] = useState<number>(0);
  const [totalPages, setTotalPages] = useState<number>(0);
  const [selectSala, setSelectSala] = useState<string>("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [open, setOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState<number>(1);

  //Modal
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  //Buscando as Salas
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

  //Itens da sala selecionada
  //useCaallback: hook que memoriza a função não deixando que ela seja replicada a cada renderização
  const fetchItens = useCallback(
    async (localizacao: string, page: number = 1) => {
      const itemPerPage =
        window.innerHeight <= 800
          ? 10
          : window.innerHeight <= 1000
          ? 15
          : window.innerHeight < 1900
          ? 20
          : 30;
      console.log(`Buscando itens para sala ${localizacao}, página ${page}`);
      try {
        const response = await listItens(
          localizacao,
          page.toString(),
          itemPerPage
        ); // Faz a requisição buscando a sala com a qnt de páginas
        if (response) {
          console.log("Itens recebidos da API:", response);
          setItens(response.data);
          setTotalItems(response.totalItems);
          setTotalPages(response.totalPages);
        } else {
          setItens([]); //limpa a lista
          setError("Não foi possível carregar os itens.");
        }
      } catch (error: unknown) {
        console.error("Erro ao buscar itens:", error);
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

  const handleSearch = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const nome = e.target.value;

    if (!nome) {
      fetchItens(selectSala, currentPage);
      return;
    }

    try {
      const response = await listItens(selectSala, "1", 10, nome);

      console.log("RESPONSE ########################");
      console.log(response);

      // if (response.salaId === selectSala) {
      setItens(response.data); // Atualiza para exibir apenas o item buscado.
      // } else {
      // setItens([]); // Caso o item não pertença à sala selecionada.
      // setError("Item não encontrado nesta sala.");
      // }
    } catch (error) {
      console.error("Erro ao buscar item pelo nome:", error);
      setError("Item não encontrado.");
    }
  };

  //Exibição do nome da sala
  const selectedSala = salas.find(
    (sala) => String(sala.localizacao) === selectSala
  );

  return (
    <ItensContainer>
      <HeaderContainer>
        <IntensListContainer>
          {selectedSala ? (
            <h3>{selectedSala.nome}</h3>
          ) : (
            <h3>Seja Bem-Vindo</h3>
          )}
          {selectSala && (
            <HeaderInput
              type="text"
              placeholder="Nome do Item"
              onChange={handleSearch}
            />
          )}
        </IntensListContainer>

        <SelectInput value={selectSala} onChange={handleSalaChange}>
          <option value="" disabled>
            Selecione uma Sala
          </option>
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

      {selectSala && (
        <PaginationContainer>
          <div>{selectSala && <h6>Itens: {totalItens}</h6>}</div>
          <Pagination
            currentPage={currentPage}
            onPageChange={setCurrentPage}
            totalPages={totalPages}
          />
          <ButtonRound onClick={handleOpen}>
            <FaPaperclip size={25} />
          </ButtonRound>
        </PaginationContainer>
      )}
      <ModalUpload isOpen={open} handleClose={handleClose} />
    </ItensContainer>
  );
}
