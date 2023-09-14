import { Link } from "react-router-dom";
import { css, styled } from "styled-components";

const CommomStyles = css`
  background-color: ${(props) => props.theme.colors.green[0]};
  border-radius: 3px;
  box-shadow: 0 3px 5px 0 rgba(0, 0, 0, 0.3);
  color: ${(props) => props.theme.colors.white[0]};
  cursor: pointer;
`;

export const LinkTo = styled(Link)`
  ${CommomStyles}
  padding: 10px 20px;
  text-align: center;
  text-decoration: none;

  p {
    margin: 0;
  }
`;

export const Button = styled.button`
  ${CommomStyles}
  border: none;
  font-size: 16px;
  min-height: 3.5rem;
`;
