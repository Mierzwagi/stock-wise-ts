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

  //Responsividade
  @media (max-width: 1200px) {
    //display: none;
    height: 24%;
    position: absolute;
  }
`;

export const IconsContainer = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
`;

interface ButtonLabel {
  variant?: boolean;
}
export const Button = styled.button<ButtonLabel>`
  display: flex;
  align-items: center;
  gap: 10px;
  background: none;
  border: none;
  cursor: pointer;
  color: white;

  span {
    display: ${({ variant }) => (variant ? "inline" : "none")};
    font-size: 16px;
  }
`;
