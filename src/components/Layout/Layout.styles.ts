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
  background-color: ${(props) => props.theme.colors.white[1]};
  border-radius: 5px;
  overflow: hidden;
  position: relative;
`;

export const Body = styled.section`
  padding: 20px;
  height: calc(100% - 195px);
`;

export const Text = styled.p`
  text-align: center;
  color: ${(props) => props.theme.colors.grey[2]};
`;

export const Title = styled.h1`
  text-align: center;
  color: ${(props) => props.theme.colors.grey[2]};
  font-size: 2rem;
  margin: 15px 0;
`;
