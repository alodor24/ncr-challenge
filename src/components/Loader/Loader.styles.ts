import { keyframes, styled } from "styled-components";

export const Wrapper = styled.div<{ $alignLoader?: boolean }>`
  height: ${(props) => (props.$alignLoader ? "calc(100% - 100px)" : "100vh")};
  display: flex;
  justify-content: center;
  align-items: center;
`;

const spin = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

export const Spinner = styled.div`
  border: 8px solid ${(props) => props.theme.colors.white[0]};
  border-radius: 50%;
  border-top: 8px solid ${(props) => props.theme.colors.green[0]};
  width: 50px;
  height: 50px;
  animation: ${spin} 1s linear infinite;
`;
