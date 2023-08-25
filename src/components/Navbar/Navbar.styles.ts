import { styled } from "styled-components";

export const Wrapper = styled.nav`
  background-color: ${(props) => props.theme.colors.green[0]};
  padding: 15px;
  box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.9);
`;

export const Brand = styled.img`
  width: 180px;
  height: 50px;
  object-fit: cover;
`;
