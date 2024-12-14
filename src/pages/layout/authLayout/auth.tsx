import {
  AuthContainer,
  AuthContent,
  BackgroundDiv,
  BackgroundDivContainer,
  SignContainer,
} from "./style";
import BackImage from "../../../assets/images/img-background-container.svg";
import { Outlet } from "react-router-dom";

export default function Auth() {
  return (
    <SignContainer>
      <BackgroundDivContainer>
        <BackgroundDiv variant="start"></BackgroundDiv>
        <BackgroundDiv variant="end"></BackgroundDiv>
      </BackgroundDivContainer>
      <AuthContainer>
        <AuthContent>
          <h1>STOCK WISE</h1>
          <Outlet />
        </AuthContent>
        <img src={BackImage} alt="" />
      </AuthContainer>
    </SignContainer>
  );
}
