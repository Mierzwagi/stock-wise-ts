import { useCallback, useEffect, useState } from "react";
import { ListReports } from "../../../components/list/reportsList";
import {
  allReports,
  listReports,
  listSalas,
  Report,
  Sala,
} from "../../../server/endpoints";
import {
  HeaderContainer,
  ListContainer,
  PaginationContainer,
  UsersContainer,
  ContainerInput,
} from "./style";
import { Pagination } from "../../../components/Pagination";
//import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./style.css";
import Select, { StylesConfig } from "react-select";

export function Reports() {
  const [salas, setSalas] = useState<Sala[]>([]);
  const [selectSala, setSelectSala] = useState<string>("");
  const [selectDateFirst] = useState<string>("");
  //const [selectDate, setSelectDate] = useState<Date | null>(null);
  const [report, setReport] = useState<Report[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [totalPages, setTotalPages] = useState<number>(0);
  const [currentPage, setCurrentPage] = useState<number>(1);

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

  const fechReports = useCallback(
    async (localizacao: string, page: number = 1, dataCriacao?: string) => {
      setLoading(true);
      try {
        const response = await listReports(
          localizacao,
          page.toString(),
          dataCriacao
        );
        console.log("Relatórios:", response);
        console.log("Data formatada enviada:", dataCriacao);
        if (response) {
          console.log("Itens recebidos da API:", response);
          setReport(response.data);
          setTotalPages(response.totalPages); // Atualiza o total de páginas
        } else {
          setReport([]); //limpa a lista
          setError("Não foi possível carregar os relatórios.");
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

  const fetchAllReports = async () => {
    try {
      const response = await allReports(); //Requisição para API
      console.log("Relatórios:", response);
      if (response) {
        setReport(response.data);
      } else {
        setReport([]);
        setError("Não foi possível carregar os relatórios.");
      }
    } catch (error) {
      const typedError = error as Error;
      setError(typedError.message);
      setError("Não foi possível carregar as salas.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchSala();
  }, []);

  useEffect(() => {
    if (!selectSala) {
      console.log("Sala selecionada mudou:", selectSala);
      fetchAllReports();
    } else {
      fechReports(selectSala, currentPage, selectDateFirst); //Busca os itens de acordo com a sala e a página selecionada
    }
  }, [selectSala, currentPage, fechReports, selectDateFirst]);

  if (loading) {
    return <p>Carregando...</p>;
  }

  if (error) {
    return <p>Erro: {error}</p>;
  }

  /* const handleSalaChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    console.log("sala selecionada", e.target.value);
    setSelectSala(e.target.value); //Atualiza de acordo com a sala selecionada
    setCurrentPage(1);
  }; */

/*   const handleDateChange = (date: Date | null) => {
    setSelectDate(date);
  }; */

  const options = salas.map((sala) => ({
    value: String(sala.localizacao),
    label: sala.nome,
  }));

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
    <UsersContainer>
      <HeaderContainer>
        <h1>Relatórios</h1>
        <ContainerInput>
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
         {/*  <DatePicker
            className="custom-datepicker"
            placeholderText="Selecione uma data"
            selected={selectDate}
            onChange={handleDateChange}
            dateFormat="MM/YYYY"
            showMonthYearPicker
          /> */}
        </ContainerInput>
      </HeaderContainer>
      <ListContainer>
        <ListReports reports={report} />
      </ListContainer>
      <PaginationContainer>
        <Pagination
          currentPage={currentPage}
          onPageChange={setCurrentPage}
          totalPages={totalPages}
        />
      </PaginationContainer>
    </UsersContainer>
  );
}
