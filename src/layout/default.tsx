
import { Sidebar } from "../components/sidebar";
import { ContainerLayout } from "../components/containerList";
import { Outlet } from "react-router-dom";
import { DefaultConatiner } from "./style";

export function Default() {
  return (
    <DefaultConatiner>
      <Sidebar />
      <ContainerLayout>
        <Outlet />
      </ContainerLayout>
    </DefaultConatiner>
  );
}
