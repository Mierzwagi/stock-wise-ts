import { Flex } from "@chakra-ui/react";
import { Sidebar } from "../components/sidebar";
import { ContainerList } from "../components/containerList";
import { Outlet } from "react-router-dom";

export function Default() {
  return (
    <Flex align="center" h="calc(100vh - 4rem)" margin="2rem 2rem" bg="yellow" >
      <Sidebar />
    <ContainerList>
      <Outlet/>
    </ContainerList>
    </Flex>
  );
}
