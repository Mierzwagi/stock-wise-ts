import styled from "styled-components";

export const SidebarContainer = styled.aside`
  width: 12%;
  height: 100%;
  background-color: aliceblue;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-image: var(--gradient);
  border-radius: 0 20px 0 20px;

  h1{
    padding: 1rem;
    color: white;
    position: relative;
    font-weight: 200;
    bottom: 12rem;
    font-size: 2rem;
    text-align: center;
  }

  button {
    border: none;
    background-color: transparent;
    cursor: pointer;
    width: 100%;
    
    align-items: center;
    padding: 1rem;

    &:hover {
      background-color: #9d4edd;
    }
  }

  //Responsividade
  @media (max-width: 1200px) {
    height: 50%;
    width: 20%;
    position: absolute;
  }
`;

export const IconsContainer = styled.div`
  width: 80%;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;

  @media (max-width: 1200px) {
    height: 24%;
  }
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
  span{
    width: 80%;
  }


`;
