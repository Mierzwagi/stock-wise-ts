import styled from "styled-components";

export const SidebarContainer = styled.aside`
  width: 14%;
  height: 100%;
  background-color: aliceblue;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-image: var(--gradient);
  border-radius: 0 20px 0 20px;

  button {
    border: none;
    background-color: transparent;
    cursor: pointer;
    width: 100%;
    justify-content: center;
    align-items: center;

    &:hover {
      background-color: #9d4edd;
    }
  }
`;

export const IconsContainer = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
`;

