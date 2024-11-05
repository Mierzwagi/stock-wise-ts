import { FaFilePdf } from "react-icons/fa6";
import {
  DenominacaoDiv,
  DivContainer,
  HeaderContainer,
  HeaderTitle,
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
    return date.toLocaleDateString('pt-BR', {
      timeZone: 'America/Sao_Paulo', 
    });
  };

  return (
    <ItensContainer>
      <HeaderContainer>
        <HeaderTitle>
          <strong>Data</strong>
        </HeaderTitle>
        <HeaderTitleDenominacao>
          <strong>Relatório</strong>
        </HeaderTitleDenominacao>
        <IMG></IMG>
      </HeaderContainer>

      {reports?.length > 0 ? (
        reports.map((report) => (
          <ListContainer key={report.id}>
            <DivContainer>
              <strong>{formatDate(report.dataCriacao)}</strong>
            </DivContainer>
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
