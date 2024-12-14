import { Switch } from "@mui/material";

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
      
  
    />
  )
}

