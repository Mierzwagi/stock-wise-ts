
import { IconsContainer, SidebarContainer } from "./style";
import { ClipboardText, File, User } from "@phosphor-icons/react";

export function Sidebar() {
  return (
    <SidebarContainer>
      <h1></h1>
      <IconsContainer>
        <button><ClipboardText size={50} color="white" /></button>
        <button><File size={50} color="white" /></button>
        <button><User size={50} color="white" /></button>
      </IconsContainer>
    </SidebarContainer>
  );
}
