import styled from "styled-components";

export const PaginationContainer = styled.div`

  display: flex;
  align-items: center;
  justify-content: center;

  gap: 1rem;
`;

interface ButtonActiveStyle {
  $active?: boolean;
}

export const IconsStyles = styled.button<ButtonActiveStyle>`
  background-color: transparent;
  border: none;
  cursor: pointer;

  &:focus {
    outline: none;
    box-shadow: none;
  }

  &:disabled {
    cursor: not-allowed;
  }

  svg {
    width: 24px;
    height: 24px;
    color: ${(props) =>
      props.$active ? "var(--purple-400)" : "var(--gray-300)"};
  }
`;

export const PageButtonsStyles = styled.button<ButtonActiveStyle>`
  background-color: transparent;
  border: none;
  cursor: pointer;

  background-color: ${(props) =>
    props.$active ? "var(--purple-200)" : "var(--gray-200)"};
  color: ${(props) => (props.$active ? "var(--white)" : "var(--black)")};

  width: 1.6rem;
  height: 1.6rem;
  margin: 0 8px;
  border-radius: 6px;

  &:focus {
    outline: none;
    box-shadow: none;
  }

  &:hover {
    filter: brightness(0.9);
  }
`;
