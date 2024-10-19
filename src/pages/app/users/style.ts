import styled from "styled-components";

export const UsersContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  gap: 1rem;
`;

export const HeaderContainer = styled.div`
  width: 100%;
  height: 10%;
  h1 {
    text-align: center;
    background-image: var(--gradient-dark);
    background-clip: text;
    -webkit-background-clip: text;
    color: transparent;

    font-size: 2rem;
  }
`;

export const UserTitle = styled.div`
  display: flex;
  align-items: center;
  gap: 20rem;

  width: 100%;
`;

export const ListContainer = styled.div`
  width: 100%;
  height: 80%;
`;

export const PaginationButton = styled.div`
  width: 100%;
  height: 10%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const PaginationContainer = styled.div`
  width: 100%;
  height: 10%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
