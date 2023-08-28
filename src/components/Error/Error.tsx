import * as SC from "./Error.styles";
import Icon from "../../assets/images/error.svg";

const Error = () => {
  return (
    <SC.Wrapper>
      <SC.Icon src={Icon} alt="error-icon" loading="lazy" />
      <SC.Text>No es posible mostrar la información solicitada</SC.Text>
    </SC.Wrapper>
  );
};

export default Error;
