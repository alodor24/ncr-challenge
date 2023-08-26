import { AccountData, RoutesEnum } from "../../constants";
import Button from "../Button";
import * as SC from "./AccountList.styles";

type Props = {
  data: AccountData[];
};

const AccountList: React.FC<Props> = ({ data }) => {
  return (
    <SC.Wrapper>
      {data.map((item) => (
        <SC.ContainerButton key={item.n}>
          <Button linkTo={`${RoutesEnum.BALANCE}/${item.n}`}>
            <p>{item.tipo_letras}</p>
            <p>Nro: {item.n}</p>
          </Button>
        </SC.ContainerButton>
      ))}
    </SC.Wrapper>
  );
};

export default AccountList;
