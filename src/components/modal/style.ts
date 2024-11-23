import styled from "styled-components";

export const BoxStyled = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 50%;
  background-color: #fff;
  border: 2px solid #000;
  box-shadow: 24px 24px 24px rgba(0, 0, 0, 0.2);
  padding: 1rem;
  border-radius: 8px;
  height: 92%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (max-width: 1200px) {
    width: 90%;
    height: 60%;
  }

  label {
    cursor: pointer;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 60%;
    height: 40%;
    margin: 2rem 0 2rem 0;
    justify-content: center;
    border: 1px solid black;
  }
`;

export const ImgItem = styled.img`
  width: 100%;
  height: 90%;

  @media (max-width: 1200px) {
    width: 78%;
  }
`;
