import { Link } from "react-router-dom";
import { styled } from "styled-components";

export const LinkTo = styled(Link)`
  background-color: ${(props) => props.theme.colors.green[0]};
  padding: 10px 20px;
  border-radius: 3px;
  box-shadow: 0 3px 5px 0 rgba(0, 0, 0, 0.3);
  color: ${(props) => props.theme.colors.white[0]};
  cursor: pointer;
  text-align: center;
  text-decoration: none;

  p {
    margin: 0;
  }
`;
