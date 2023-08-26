import { styled } from "styled-components";

export const Wrapper = styled.div`
  margin-top: 35px;
  height: 300px;
  max-height: 60%;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(15rem, 1fr));
  gap: 2rem;
`;

export const ContainerButton = styled.div`
  a {
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: calc(100% - 20px);
  }
`;
