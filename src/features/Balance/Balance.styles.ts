import { styled } from "styled-components";

export const Container = styled.div`
  width: 350px;
  max-width: 100%;
  margin: 90px auto 0 auto;
`;

export const Text = styled.p`
  color: ${(props) => props.theme.colors.grey[2]};
`;
