import { Toggle } from "./style";

interface ToggleButtonProps {
    isOn: boolean;
    handle: () => void;
  }

export function ToggleButton({isOn, handle}: ToggleButtonProps) {
  return <Toggle isOn={isOn} onClick={handle}/>
}

