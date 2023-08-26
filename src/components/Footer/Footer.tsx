import { useDispatch, useSelector } from "react-redux";
import { RoutesEnum } from "../../constants";
import Button from "../Button";
import * as SC from "./Footer.styles";
import { RootState } from "../../store";
import { setButton } from "../../reducers/buttonReducer";

const Footer = () => {
  const { isVisible } = useSelector((state: RootState) => state.button);
  const dispatch = useDispatch();

  const handleToggleButton = () => {
    dispatch(setButton(false));
  };

  return (
    <SC.Wrapper>
      {isVisible && (
        <Button linkTo={RoutesEnum.ROOT} action={handleToggleButton}>
          Salir
        </Button>
      )}
    </SC.Wrapper>
  );
};

export default Footer;
