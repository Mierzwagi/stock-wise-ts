import { Sidebar } from "../../../components/sidebar";
import { ContainerLayout } from "../../../components/containerList";
import { Outlet } from "react-router-dom";
import { ButtonSidebar, DefaultConatiner } from "./style";
import { useEffect, useState } from "react";
import {  FaBars } from "react-icons/fa6";

export function Default() {
  const [openSidebar, setOpenSidebar] = useState(false);
  useEffect(() => {});
  const approved = window.innerWidth <= 1200 ? true : false;
  return (
    <DefaultConatiner>
      {approved && (
        <ButtonSidebar onClick={() => setOpenSidebar(!openSidebar)}><FaBars/></ButtonSidebar>
      )}
  {
    !approved 
  }
      {(!approved || openSidebar) && <Sidebar/>}
      <ContainerLayout>
        <Outlet />
      </ContainerLayout>
    </DefaultConatiner>
  );
}
