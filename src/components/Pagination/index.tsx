import { IconsStyles, PageButtonsStyles, PaginationContainer } from "./style";
import { useContextSelector } from "use-context-selector";
import { ItensContext } from "../../pages/app/itens";
import { useState, useMemo, useEffect } from "react";
import { FaCaretLeft, FaCaretRight } from "react-icons/fa6";

export function Pagination() {
  const { fetchItens, selectSala, totalPages } = useContextSelector(
    ItensContext,
    (context) => context
  );

  const [currentPage, setCurrentPage] = useState(1);
  /* const totalItens = useContextSelector(
    ItensContext,
    (context) => context.itens.length
  ); */
  //const totalPages = Math.ceil(totalItems / limitPerPage);

  useEffect(() => {
    if (selectSala) {
      fetchItens(selectSala, currentPage); // Chama a busca com a sala e a página atuais
    }
  }, [currentPage, selectSala]);

  const visiblePages = useMemo(() => {
    const maxVisiblePages = 2;

    const startPage = Math.max(1, currentPage - maxVisiblePages);
    const endPage = Math.min(totalPages, currentPage + maxVisiblePages);

    return Array.from(
      { length: endPage - startPage + 1 },
      (_, index) => startPage + index
    );
  }, [currentPage, totalPages]);

  const canGoBack = currentPage > 1
  const canGoForward = currentPage < totalPages

  return (
    <PaginationContainer>
      <IconsStyles active={canGoBack} disabled={!canGoBack} onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}>
        <FaCaretLeft />
      </IconsStyles>

      <div>
        {visiblePages.map((page) => (
          <PageButtonsStyles active={page === currentPage} onClick={() => setCurrentPage(page)} key={page}>
            {page}
          </PageButtonsStyles>
        ))}
      </div>
      <IconsStyles active={canGoForward} disabled={!canGoForward} onClick={() => setCurrentPage((prev) => Math.max(prev + 1))}>
        <FaCaretRight />
      </IconsStyles>
    </PaginationContainer>
  );
}

