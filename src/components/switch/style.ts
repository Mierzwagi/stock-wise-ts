import { Switch } from "@mui/material";
import styled from "styled-components";

interface ToggleProps {
  isOn: boolean;
}

export const SwitchStyled = styled(Switch)<ToggleProps>`
 /*  width: 3.75rem;
  height: 1.5rem;
  background-color: ${(props) =>
    props.isOn === true ? "var(--purple-100)" : "var(--gray-200)"};
  border-radius: 30px;
  transition: background-color 300ms linear;

  display: flex;
  align-items: center;
  cursor: pointer;
  position: relative;

  &:before {
    content: "${(props) => (props.isOn === true ? "" : "")}";
    width: 1.25rem;
    height: 1.25rem;
    background-color: var(--purple-400);
    border-radius: 50%;
    position: absolute;
    transition: left 400ms linear;

    display: flex;
    align-items: center;
    justify-content: center;
    left: ${(props) => (props.isOn === true ? "2.18rem" : "0")};
  } */
`;
