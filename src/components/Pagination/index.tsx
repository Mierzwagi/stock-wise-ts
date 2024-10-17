import { IconsStyles, PageButtonsStyles, PaginationContainer } from "./style";
import { useMemo } from "react";
import { FaCaretLeft, FaCaretRight } from "react-icons/fa6";

// Paginação recebe a pagina atual como prop que vem dos componentes
interface PaginationProps {
  currentPage: number; 
  onPageChange: (page: number) => void;
  totalPages: number;
}

export function Pagination({ currentPage, onPageChange, totalPages }: PaginationProps) {
  const visiblePages = useMemo(() => {
    const maxVisiblePages = 1; // Quandidade de páginas para mostrar

    //Página inicial e página final que são exibidas
    const startPage = Math.max(1, currentPage - maxVisiblePages); // Página inicial não podendo ser menor que 1
    const lastPage = Math.min(totalPages, currentPage + maxVisiblePages); //Página final não podendo ser menor que o total

    //Arrya e páginas
    return Array.from(
      { length: lastPage - startPage + 1 }, // A diferença entra a página inicial e final é o tamanho da array
      (_, index) => startPage + index
    );
  }, [currentPage, totalPages]); // Atualizando quando mudadas

  const canGoBack = currentPage > 1; // Voltar a página
  const canGoForward = currentPage < totalPages; // Ir para próxima página

  return (
    <PaginationContainer>
      <IconsStyles
        active={canGoBack}
        disabled={!canGoBack} // Disabita quando não tiver páginas para voltar
        onClick={() => canGoBack && onPageChange(currentPage - 1)} 
      >
        <FaCaretLeft />
      </IconsStyles>

      <div>
        {visiblePages.map((page) => (
          <PageButtonsStyles
            active={page === currentPage}
            onClick={() => onPageChange(page)} 
            key={page}
          >
            {page}
          </PageButtonsStyles>
        ))}
      </div>

      <IconsStyles
        active={canGoForward}
        disabled={!canGoForward}
        onClick={() => canGoForward && onPageChange(currentPage + 1)} //
      >
        <FaCaretRight />
      </IconsStyles>
    </PaginationContainer>
  );
}
