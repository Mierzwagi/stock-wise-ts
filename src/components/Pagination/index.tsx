import { CaretLeft, CaretRight } from "@phosphor-icons/react";
import { IconsStyles, PageButtonsStyles, PaginationContainer } from "./style";

export function Pagination() {
  return (
    <PaginationContainer>
      <IconsStyles>
        <CaretLeft />
      </IconsStyles>

      <div>
        <PageButtonsStyles active>1</PageButtonsStyles>
        <PageButtonsStyles>2</PageButtonsStyles>
        <PageButtonsStyles>3</PageButtonsStyles>
      </div>
      <IconsStyles active>
        <CaretRight />
      </IconsStyles>
    </PaginationContainer>
  );
}
