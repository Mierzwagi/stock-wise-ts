//import { Outlet } from "react-router-dom";

import { AuthContainer, BackgroundDiv, BackgroundDivContainer, SignContainer } from "./style";
import BackImage from "../../../assets/images/img-background-container.svg";
import { Outlet } from "react-router-dom";
//import test1  from '../../../assets/images/test1.svg'
//import test2 from '../../../assets/images/test2.svg'

export default function Auth() {
  return (
    <SignContainer>
      <BackgroundDivContainer>
        <BackgroundDiv variant="start"></BackgroundDiv>
        <BackgroundDiv variant="end"></BackgroundDiv>
      </BackgroundDivContainer>
      <AuthContainer>
        <Outlet/>
        <img src={BackImage} alt="" />
      </AuthContainer>
    </SignContainer>
  );
}
