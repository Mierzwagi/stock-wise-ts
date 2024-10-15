//import { Toggle } from "./style";
import { Switch } from "@mui/material";
//import { SwitchStyled } from "./style";



interface ToggleButtonProps {
    isOn: boolean;
    handle: () => void;
  }

export function ToggleButton({isOn, handle}: ToggleButtonProps) {
  return (
    <Switch
    color="secondary"
      checked={isOn}
      onChange={handle}
      inputProps={{ 'aria-label': 'controlled' }}
  
    />
  )
}

