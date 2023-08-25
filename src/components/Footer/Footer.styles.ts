import { styled } from "styled-components";

export const Wrapper = styled.footer`
  position: absolute;
  width: 100%;
  padding: 20px;
  bottom: 0;
  border-top: solid 1px ${(props) => props.theme.colors.grey[1]};
`;
