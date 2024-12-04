import styled from "styled-components";

export const SidebarContainer = styled.aside`
  width: 12%;
  height: 100%;
  background-color: aliceblue;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  background-image: var(--gradient);
  border-radius: 0 20px 0 20px;

  h1 {
    color: white;
    font-weight: 400;
    font-size: 2rem;
    text-align: center;

    @media (max-width: 700px) {
      padding: 1rem;
    }
  }

  //Responsividade
  @media (max-width: 1200px) {
    height: 50%;
    width: 20%;
    position: absolute;
    border-radius: 20px 20px 20px 20px;
  }

  @media (max-width: 700px) {
    width: 63%;
    height: 100%;
    border-radius: 0 5px 5px 0;
  }
`;

export const IconsContainer = styled.div`
  width: 100%;
  display: grid;
  justify-items: center;
  gap: 1rem;
`;

interface ButtonLabel {
  $variant?: boolean;
}
export const Button = styled.button<ButtonLabel>`
  display: flex;
  align-items: center;
  gap: 10px;
  background: none;
  border: none;
  cursor: pointer;
  color: white;
  justify-content: flex-start;
  border: none;
  background-color: transparent;
  cursor: pointer;
  width: 90%;

  align-items: center;
  padding: 1rem;

  &:hover {
    background-color: #9d4edd;
  }

  svg {
  }

  @media (max-width: 1200px) {
    width: 78%;
  }
`;

export const ButtonLogout = styled.button`
background-color: transparent;
border: none;
color: var(--white);

&:hover {
    color: var(--purple-200);
  }


`
