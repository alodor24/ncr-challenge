import { useDispatch } from "react-redux";
import { AccountData, RoutesEnum } from "../../constants";
import Button from "../Button";
import * as SC from "./AccountList.styles";
import { setButton } from "../../reducers/buttonReducer";

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
      {data.map((item) => (
        <SC.ContainerButton key={item.n}>
          <Button
            linkTo={`${RoutesEnum.BALANCE}/${item.n}`}
            action={handleToggleButton}
          >
            <p>{item.tipo_letras}</p>
            <p>Nro: {item.n}</p>
          </Button>
        </SC.ContainerButton>
      ))}
    </SC.Wrapper>
  );
};

export default AccountList;
