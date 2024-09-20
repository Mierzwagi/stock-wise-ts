import { Flex } from "@chakra-ui/react";
import { SidebarContainer } from "./style";
import { ClipboardText, File, User } from "@phosphor-icons/react";

export function Sidebar() {
  return (
    <SidebarContainer>
      <h1></h1>
      <Flex w="100%" direction="column" gap="2rem" align="center">
        <Flex as="button" align="center" justify="center" w="100%">
          <ClipboardText size={50} color="white" />
        </Flex>
        <Flex as="button" align="center" justify="center" w="100%">
          <File size={50} color="white" />
        </Flex>
        <Flex as="button" align="center" justify="center" w="100%">
          <User size={50} color="white" />
        </Flex>
      </Flex>
    </SidebarContainer>
  );
}
