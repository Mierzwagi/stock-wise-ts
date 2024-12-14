import { useMemo } from "react";

// Paginação recebe a pagina atual como prop que vem dos componentes
interface usePaginationProps {
  currentPage: number;
  totalPages: number;
}

export function usePagination({ currentPage, totalPages }: usePaginationProps) {
  const visiblePages = useMemo(() => {
    const maxVisiblePages = 1; // Quandidade de páginas para mostrar

    //Página inicial e página final que são exibidas
    const startPage = Math.max(1, currentPage - maxVisiblePages); // Página inicial não podendo ser menor que 1
    const lastPage = Math.min(totalPages, currentPage + maxVisiblePages); //Página final não podendo ser menor que o total

    //Array e páginas
    return Array.from(
      { length: lastPage - startPage + 1 }, // A diferença entra a página inicial e final é o tamanho da array
      (_, index) => startPage + index
    );
  }, [currentPage, totalPages]); // Atualizando quando mudadas

  const canGoBack = currentPage > 1; // Voltar a página
  const canGoForward = currentPage < totalPages; // Ir para próxima página

  return {
    visiblePages,
    canGoBack,
    canGoForward,
  };
}
