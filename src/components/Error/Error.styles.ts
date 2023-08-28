import { styled } from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: calc(100% - 100px);
`;

export const Icon = styled.img`
  width: 80px;
`;

export const Text = styled.p`
  color: ${(props) => props.theme.colors.grey[2]};
  text-align: center;
`;
