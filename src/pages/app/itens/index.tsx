import { useCallback, useEffect, useState } from "react";
import { FaPaperclip } from "react-icons/fa6";

import { ListItens } from "../../../components/list/itensList";
import { Pagination } from "../../../components/Pagination";
import { ButtonRound } from "../../../components/button";
import { ModalUpload } from "../../../components/modal/modalAnexo";

import React from "react";
import Select, { StylesConfig } from "react-select";

import { Item, listItens, listSalas, Sala } from "../../../server/endpoints";

import {
  HeaderContainer,
  HeaderInput,
  IntensListContainer,
  ItensContainer,
  ListContainer,
  PaginationContainer,
} from "./style";

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

  const handleSearch = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value;

    if (!query) {
      fetchItens(selectSala, currentPage);
      return;
    }

    const isIdSearch = !isNaN(Number(query));

    try {
      const response = await listItens(
        selectSala,
        "1",
        10,
        isIdSearch ? "" : query,
        isIdSearch ? query : ""
      );

      setItens(response.data); // Atualiza para exibir apenas o item buscado.
    } catch (error) {
      console.error("Erro ao buscar item pelo nome:", error);
      setError("Item não encontrado.");
    }
  };

  //Exibição do nome da sala
  const selectedSala = salas.find(
    (sala) => String(sala.localizacao) === selectSala
  );

  const userRole = localStorage.getItem("authUser");

  const options = salas.map((sala) => ({
    value: String(sala.localizacao),
    label: sala.nome,
  }));


//Estilização select
  const customStyles: StylesConfig<{ value: string; label: string }, false> = {
    control: (base, state) => ({
      ...base,
      width: "100%",
      backgroundColor: state.isFocused ? "#f0f8ff" : "#DFB6FF",
      borderColor: state.isFocused ? "#9D4EDD" : "#ccc",
      boxShadow: state.isFocused ? "0 0 5px rgba(0, 0, 0, 0.5)" : "none",
      "&:hover": {
        borderColor: "#9D4EDD",
      },
    }),
    option: (base, state) => ({
      ...base,
      fontSize: "0.7rem",
      padding: "0.5rem 1rem",
      cursor: "pointer",
      backgroundColor: state.isSelected
        ? "#DFB6FF"
        : state.isFocused
        ? "#1a1022"
        : "#fff",
      color: state.isSelected ? "#fff" : "#000",
      "&:hover": {
        backgroundColor: "#DFB6FF",
      },
    }),
    singleValue: (base) => ({
      ...base,
      color: "#9D4EDD",
    }),
  };

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
              placeholder="Item"
              onChange={handleSearch}
            />
          )}
        </IntensListContainer>

        <Select
          options={options}
          styles={customStyles}
          value={options.find((option) => option.value === selectSala)}
          onChange={(selectedOption) => {
            if (selectedOption) {
              setSelectSala(String(selectedOption.value)); // Converte para string
              setCurrentPage(1);
            }
          }}
          placeholder="Selecione uma Sala"
        />
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
      {userRole === "ADMIN" && (
        <ModalUpload isOpen={open} handleClose={handleClose} />
      )}
    </ItensContainer>
  );
}
