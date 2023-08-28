import { useDispatch } from "react-redux";
import { RoutesEnum, TypeAccountEnum } from "../../constants";
import Button from "../Button";
import * as SC from "./AccountList.styles";
import { setButton } from "../../reducers/buttonReducer";
import { AccountData } from "../../types";

type Props = {
  data: AccountData[];
};

const AccountList: React.FC<Props> = ({ data }) => {
  const dispatch = useDispatch();

  const handleToggleButton = () => {
    dispatch(setButton(true));
  };

  return (
    <SC.Wrapper>
      {data.slice(0, 6).map((item) => (
        <SC.ContainerButton key={`${item.n}${item.t}`}>
          <Button
            linkTo={`${RoutesEnum.BALANCE}/${item.n}${item.t}`}
            action={handleToggleButton}
          >
            <p>
              {item.tipo_letras.toUpperCase() === TypeAccountEnum.CA
                ? TypeAccountEnum.CAJA_AHORRO
                : TypeAccountEnum.CUENTA_CORRIENTE}
            </p>
            <p>Nro: {item.n}</p>
          </Button>
        </SC.ContainerButton>
      ))}
    </SC.Wrapper>
  );
};

export default AccountList;
