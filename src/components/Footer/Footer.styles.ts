import { styled } from "styled-components";

export const Wrapper = styled.footer`
  position: absolute;
  padding: 0 20px;
  bottom: 0;
  left: 0;
  right: 0;
  height: 60px;
  display: flex;
  align-items: center;
  border-top: solid 1px ${(props) => props.theme.colors.grey[1]};
`;
