import { useDispatch, useSelector } from "react-redux";
import { RoutesEnum } from "../../constants";
import Button from "../Button";
import * as SC from "./Footer.styles";
import { RootState } from "../../store";
import { setButton } from "../../reducers/buttonReducer";
import { useLocation } from "react-router-dom";

const Footer = () => {
  // Consulta el estado global para obtener valor del estado del button
  const { isVisible } = useSelector((state: RootState) => state.button);
  const dispatch = useDispatch();
  // Obtener url de la vista actual
  const { pathname } = useLocation();
  // Comparar si la url obtenida es diferente de la ruta raíz y establecer la variable en true
  const isRoot = pathname !== RoutesEnum.ROOT ? true : false;
  // Con esta variable obtenemos el valor de la variable global o en su defecto el valor de la variable isRoot
  const buttonIsVisible = isVisible || isRoot;

  // Manejo del estado global del button Salir
  const handleToggleButton = () => {
    dispatch(setButton(false));
  };

  return (
    <SC.Wrapper>
      {buttonIsVisible && (
        <Button linkTo={RoutesEnum.ROOT} action={handleToggleButton}>
          Salir
        </Button>
      )}
    </SC.Wrapper>
  );
};

export default Footer;
