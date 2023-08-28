import Button from "../../components/Button";
import { RoutesEnum } from "../../constants";
import * as SC from "./NotFound.styles";

const NotFound = () => {
  return (
    <SC.Wrapper>
      <SC.Title>404 | Página no encontrada</SC.Title>
      <SC.Text>
        Si estas viendo este mensaje seguramente el recurso no se encuentre
        disponible o existe algún error de escritura en la url.
      </SC.Text>
      <Button linkTo={RoutesEnum.ROOT}>Regresar al Inicio</Button>
    </SC.Wrapper>
  );
};

export default NotFound;
