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
  SelectInput,
  HeaderContainer,
  ListContainer,
  PaginationContainer,
  UsersContainer,
  DateInput,
} from "./style";
import { Pagination } from "../../../components/Pagination";

export function Reports() {
  const [salas, setSalas] = useState<Sala[]>([]);
  const [selectSala, setSelectSala] = useState<string>("");
  const [selectDateFirst, setSelectDateFirst] = useState<string>("");
  const [selectDateLast, setSelectDateLast] = useState<string>("");
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
    async (
      localizacao: string,
      page: number = 1,
      dataCriacao?: string,
      dataFinal?: string
    ) => {
      setLoading(true);
      try {
        const response = await listReports(
          localizacao,
          page.toString(),
          dataCriacao,
          dataFinal
        );
        console.log("Relatórios:", response);
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
        setError("Não foi possível carregar os usuários.");
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
      fechReports(selectSala, currentPage, selectDateFirst, selectDateLast); //Busca os itens de acordo com a sala e a página selecionada
    }
  }, [selectSala, currentPage, fechReports, selectDateFirst, selectDateLast]);

  if (loading) {
    return <p>Carregando...</p>;
  }

  if (error) {
    return <p>Erro: {error}</p>;
  }

  const handleSalaChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    console.log("sala selecionada", e.target.value);
    setSelectSala(e.target.value); //Atualiza de acordo com a sala selecionada
    setCurrentPage(1);
  };

  const handleDateFirst = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelectDateFirst(e.target.value);
  };
  const handleDateLast = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelectDateLast(e.target.value); //Atualiza de acordo com a data final selecionada
  };

  return (
    <UsersContainer>
      <h1>Relatórios</h1>
      <HeaderContainer>
        <SelectInput value={selectSala} onChange={handleSalaChange}>
          <option value="" disabled selected>
            Selecione uma Sala
          </option>
          {salas.map((sala) => (
            <option key={sala.localizacao} value={sala.localizacao}>
              {sala.nome}
            </option>
          ))}
        </SelectInput>
        <div>
          <label htmlFor="">Data Inicial:</label>
          <DateInput
            type="date"
            value={selectDateFirst}
            onChange={handleDateFirst}
          />
        </div>
        <div>
          <label htmlFor="">Data Final:</label>
          <DateInput
            type="date"
            value={selectDateLast}
            onChange={handleDateLast}
          />
        </div>
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
