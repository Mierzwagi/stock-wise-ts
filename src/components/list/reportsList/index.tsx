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
  //  const [allReports, setAllReports] = useState<Report[] | null>(null);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("pt-BR", {
      timeZone: "America/Sao_Paulo",
    });
  };

  return (
    <ItensContainer>
      <HeaderContainer>
        <HeaderId>
          <strong>Data</strong>
        </HeaderId>
        <HeaderTitleDenominacao>
          <strong>Relatório</strong>
        </HeaderTitleDenominacao>
        <IMG></IMG>
      </HeaderContainer>

      {reports?.length > 0 ? (
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
        ))
      ) : (
        <p>Nenhum relatório disponível</p>
      )}
    </ItensContainer>
  );
};
