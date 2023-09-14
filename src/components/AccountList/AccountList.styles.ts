import { styled } from "styled-components";

export const Wrapper = styled.div`
  margin-top: 35px;
  height: 300px;
  max-height: 60%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(2, 1fr);
  gap: 2rem;
  overflow: auto;

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(3, 1fr);
  }

  @media (max-width: 480px) {
    height: 100%;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(6, 1fr);
  }
`;

export const ContainerButton = styled.div`
  a {
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: calc(100% - 20px);
  }
`;
