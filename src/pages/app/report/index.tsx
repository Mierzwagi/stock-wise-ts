import { ListReports } from "../../../components/list/reportsList";
import { HeaderContainer, ListContainer, PaginationContainer, UsersContainer } from "../users/style";


export function Reports() {
  return (
    <UsersContainer>
      <HeaderContainer>
        <h1>Relatórios</h1>
      </HeaderContainer>
      <ListContainer>
        <ListReports/>
      </ListContainer>
      <PaginationContainer>
        
      </PaginationContainer>
    </UsersContainer>
  )
}
