import { styled } from "styled-components";

export const Wrapper = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

export const Container = styled.section`
  width: 1024px;
  max-width: 95%;
  height: 90vh;
  background-color: ${(props) => props.theme.colors.white[0]};
  border-radius: 5px;
  overflow: hidden;
`;
