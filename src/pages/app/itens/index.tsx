import { List } from "../../../components/list";
import {
  DenominacaoH4,
  IntensListContainer,
  ItensContainer,
  ItensTitle,
  SelectContainer,
  SelectInput,
} from "./style";

const salas = [
  { value: "sala1", label: "sala1" },
  { value: "sala2", label: "sala2" },
  { value: "sala3", label: "sala3" },
  { value: "sala4", label: "sala4" },
];

export function Itens() {
  return (
    <ItensContainer>
      <SelectContainer>
        <SelectInput>
          <option value="" hidden>
            Selecionar sala
          </option>
          {salas.map((options) => (
            <option value={options.value}>{options.label}</option>
          ))}
        </SelectInput>
      </SelectContainer>

      <IntensListContainer>
        <h2>Nome Sala</h2>
        <ItensTitle>
          <h4>Nº Inventário</h4>
          <DenominacaoH4>Denominação</DenominacaoH4>
          <h4>Incorporação</h4>
          <h4>Foto</h4>
        </ItensTitle>
        <List />
        {/* <List />
        <List />
        <List />
        <List />
        <List /> */}
      </IntensListContainer>
    </ItensContainer>
  );
}
