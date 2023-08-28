import { styled } from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

export const Title = styled.h1`
  color: ${(props) => props.theme.colors.white[0]};
  margin-bottom: 0;
`;

export const Text = styled.p`
  color: ${(props) => props.theme.colors.white[0]};
  margin-bottom: 35px;
`;
