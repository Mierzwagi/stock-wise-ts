import { Flex } from "@chakra-ui/react";
import { List } from "../../components/list/intex";
import { DenominacaoH4, SelectInput } from "./style";

const salas = [
  { value: "sala1", label: "sala1" },
  { value: "sala2", label: "sala2" },
  { value: "sala3", label: "sala3" },
  { value: "sala4", label: "sala4" },
];
export function Itens() {
  return (
    <Flex direction="column" gap="1rem">
      <Flex justify="center">
        <SelectInput placeholder="SALA" variant="filled" size="md" w="15%">
          {salas.map((options) => (
            <option value={options.value}>{options.label}</option>
          ))}
        </SelectInput>
      </Flex>
      <Flex direction="column" gap="1rem" align="flex-start">
        <h2>Nome Sala</h2>
        <Flex align="center" gap="7.8rem" w="100%" >
          <h4>Nº Inventário</h4>
          <DenominacaoH4>Denominação</DenominacaoH4> 
          <h4>Incorporação</h4>
          <h4>Foto</h4>
        </Flex>
        <List/>
        <List/>
        <List/>
        <List/>
        <List/>
        <List/>
      </Flex>
    </Flex>
  );
}
