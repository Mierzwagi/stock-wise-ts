import { FaFilePdf } from "react-icons/fa6";
import {
  DenominacaoDiv,
  DivId,
  HeaderContainer,
  HeaderId,
  HeaderTitleDenominacao,
  IMG,
  ItensContainer,
  ListContainer,
} from "../style/style";
import { Report } from "../../../server/endpoints";

interface ReportsProps {
  reports: Report[];
}
export const ListReports: React.FC<ReportsProps> = ({ reports }) => {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("pt-BR", {
      timeZone: "America/Sao_Paulo",
    });
  };

  const headers = [
    {
      label: "Data",
      component: (
        <HeaderId>
          <strong>Data</strong>
        </HeaderId>
      ),
    },
    {
      label: "Relatório",
      component: (
        <HeaderTitleDenominacao>
          <strong>Relatório</strong>
        </HeaderTitleDenominacao>
      ),
    },
    { label: "Ação", component: <IMG /> },
  ];

  // Função para renderizar relatórios
  const renderReports = () =>
    reports.map((report) => (
      <ListContainer key={report.id}>
        <DivId>
          <strong>{formatDate(report.dataCriacao)}</strong>
        </DivId>
        <DenominacaoDiv>
          <strong>{report.nome}</strong>
        </DenominacaoDiv>
        <a href={report.url} target="_blank" download>
          <FaFilePdf size={30} color="#5907AF" />
        </a>
      </ListContainer>
    ));

  return (
    <ItensContainer>
      <HeaderContainer>
        {headers.map((header) => header.component)}
      </HeaderContainer>

      {reports.length > 0 ? (
        renderReports()
      ) : (
        <p>Nenhum relatório disponível</p>
      )}
    </ItensContainer>
  );
};
