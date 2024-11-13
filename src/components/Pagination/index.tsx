import { IconsStyles, PageButtonsStyles, PaginationContainer } from "./style";
import { FaCaretLeft, FaCaretRight } from "react-icons/fa6";
import { usePagination } from "../../hooks/pagination";

// Paginação recebe a pagina atual como prop que vem dos componentes
interface PaginationProps {
  currentPage: number;
  onPageChange: (page: number) => void;
  totalPages: number;
}

export function Pagination({
  currentPage,
  onPageChange,
  totalPages,
}: PaginationProps) {
  const { visiblePages, canGoBack, canGoForward } = usePagination({
    currentPage,
    totalPages,
  });
  return (
    <PaginationContainer>
      <IconsStyles
        $active={canGoBack}
        disabled={!canGoBack} // Disabita quando não tiver páginas para voltar
        onClick={() => canGoBack && onPageChange(currentPage - 1)}
      >
        <FaCaretLeft />
      </IconsStyles>

      <div>
        {visiblePages.map((page: number) => (
          <PageButtonsStyles
            $active={page === currentPage}
            onClick={() => onPageChange(page)}
            key={page}
          >
            {page}
          </PageButtonsStyles>
        ))}
      </div>

      <IconsStyles
        $active={canGoForward}
        disabled={!canGoForward}
        onClick={() => canGoForward && onPageChange(currentPage + 1)} //
      >
        <FaCaretRight />
      </IconsStyles>
    </PaginationContainer>
  );
}
