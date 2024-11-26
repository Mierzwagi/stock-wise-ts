import styled from "styled-components";

export const DefaultConatiner = styled.main`
  height: calc(100vh - 4rem);
  margin: 2rem 2rem;

  display: flex;
  align-items: center;
  gap: 2rem;

  @media (max-width: 1200px) {
    align-items: start;
    margin: 0;
    height: calc(100vh);
  }
`;

export const ButtonSidebar = styled.button`
  position: absolute;
  z-index: 1;
  padding: 0.5rem;
  border: none;
  background-color: transparent;
`;
