import styled from "styled-components";
import ImgFundoCell from "../../assets/images/img-fundo-cell.svg";

export const PageConatiner = styled.main`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const Header = styled.header`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;
export const HeaderNav = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;

  nav {
    gap: 1rem;
    display: flex;

    a {
      text-decoration: none;
    }
  }
`;
export const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  button {
    width: 60%;
    background-color: transparent;
    border: none;
  }
`;
export const HeaderSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;

  h1 {
    width: 50%;
    font-size: 2rem;
    text-align: center;
  }

  p {
    font-size: 1.2rem;
  }
`;

export const SectionAboutUs = styled.section`
  width: 100%;
  background-image: url(${ImgFundoCell});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat; 
  h2 {
    font-size: 2rem;
    color: #000;
    margin-bottom: 1rem;
  }

  p {
    font-size: 1rem;
    line-height: 1.6;
    color: #000; 
  }
`;
export const DivAboutUs = styled.div`
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); 
`;
export const DivImgAbout = styled.div``;
export const SectionProblem = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8rem;
  background-color: aliceblue;
`;
export const DivImgProblem = styled.div`
`;
export const DivProblem = styled.div``;
