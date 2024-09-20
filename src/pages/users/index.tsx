import { Flex } from "@chakra-ui/react";
import { ListUser } from "../../components/list/intex";

export function Users() {
  return (
    <Flex direction="column" gap="1rem" align="flex-start">
      <h2>Usuários</h2>
      <Flex align="center" gap="20rem" w="100%" >
        <h4>Nome</h4>
        <h4>E-mail</h4>
        <h4>Nível</h4>
      </Flex>
      <ListUser/>
    </Flex>
  );
}
