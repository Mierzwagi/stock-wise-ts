import styled from "styled-components";

export const ContainerHome = styled.div<{ isSidebarOpen: boolean }>`
  width: 88%;
  height: 100%;
  padding: 0 1.4rem;
  background-color: var(--gray-100);
  padding: 1rem 2rem;
  border-radius: 10px;
  box-shadow: 20px 14px 20px 3px rgba(0, 0, 0, 0.2);

  opacity: ${({ isSidebarOpen }) => (isSidebarOpen ? 1 : 4)};
  pointer-events: ${({ isSidebarOpen }) => (isSidebarOpen ? "none" : "auto")};

  //Responsividade
  @media (max-width: 1200px) {
    width: 100%;
  }
`;
