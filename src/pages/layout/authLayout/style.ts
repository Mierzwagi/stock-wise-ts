import styled from "styled-components";
import backgroundImage from "../../../assets/images/backgroud-sign.svg";

export const SignContainer = styled.main`
  width: 100%;
  min-height: 100vh;

  background-image: url(${backgroundImage});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-color: #f3f3f3;

  display: flex;
  align-items: center;
  justify-content: center;
`;
