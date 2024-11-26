import { ContainerHome } from "./style";

interface ContainerLayoutProps {
  children: React.ReactNode;
  isSidebarOpen: boolean;
}

//Qualquerr tipo de conteúdo redenrizado
export function ContainerLayout({ children, isSidebarOpen }: ContainerLayoutProps) {
  return <ContainerHome isSidebarOpen={isSidebarOpen}>{children}</ContainerHome>;
}
