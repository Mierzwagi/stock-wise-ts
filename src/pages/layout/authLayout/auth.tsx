//import { Outlet } from "react-router-dom";

import {
  AuthContainer,
  AuthContent,
  BackgroundDiv,
  BackgroundDivContainer,
  SignContainer,
} from "./style";
import BackImage from "../../../assets/images/img-background-container.svg";
import BackImageMobile from "../../../assets/images/img-sign-mobile.svg";
import { Outlet } from "react-router-dom";
//import test1  from '../../../assets/images/test1.svg'
//import test2 from '../../../assets/images/test2.svg'

export default function Auth() {

  const approved = window.innerWidth <= 768;

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
        <img src={approved ? BackImageMobile : BackImage} alt="" />
      </AuthContainer>
    </SignContainer>
  );
}
