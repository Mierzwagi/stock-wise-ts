import { useCallback, useEffect, useState } from "react";
import { ListReports } from "../../../components/list/reportsList";
import {
  HeaderContainer,
  ListContainer,
  PaginationContainer,
  UsersContainer,
} from "../users/style";
import {  listReports, listSalas, Report, Sala } from "../../../server/endpoints";
import { SelectInput } from "./style";

export function Reports() {
  const [salas, setSalas] = useState<Sala[]>([]);
  const [selectSala, setSelectSala] = useState<string>("");
  const [report, setReport] = useState<Report[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

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

  const fechReports = useCallback (async (localizacao: string) => {
    setLoading(true);
    try {
      const response = await listReports(localizacao);
      console.log("Relatórios:", response);
      setReport(response);

    } catch (error) {
      const typedError = error as Error;
      setError(typedError.message);
    } finally {
      setLoading(false);
    }
  }, [])

  useEffect(() => {
    fetchSala();
  }, []);


  useEffect(() => {
    if (selectSala) {
      console.log("Sala selecionada mudou:", selectSala);
      fechReports(selectSala); //Busca os itens de acordo com a sala e a página selecionada
    } else {
      setReport([]);
    }
  }, [selectSala, fechReports]);

  if (loading) {
    return <p>Carregando...</p>;
  }

  if (error) {
    return <p>Erro: {error}</p>;
  }

  const handleSalaChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const salaId = e.target.value;
    console.log("sala selecionada", salaId);
    setSelectSala(salaId); //Atualiza de acordo com a sala selecionada
  };

  return (
    <UsersContainer>
      <HeaderContainer>
        <h1>Relatórios</h1>

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
      </HeaderContainer>
      <ListContainer>
        <ListReports reports={report}/>
      </ListContainer>
      <PaginationContainer></PaginationContainer>
    </UsersContainer>
  );
}
