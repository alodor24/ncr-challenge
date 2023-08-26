import { RoutesEnum } from "../../constants";
import Button from "../Button";
import * as SC from "./Footer.styles";

// TODO: Replace const for global state
const isVisible = true;

const Footer = () => {
  return (
    <SC.Wrapper>
      {isVisible && <Button linkTo={RoutesEnum.ROOT}>Salir</Button>}
    </SC.Wrapper>
  );
};

export default Footer;
