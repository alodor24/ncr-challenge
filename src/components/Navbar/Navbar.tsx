import * as SC from "./Navbar.styles";
import Logo from "../../assets/images/logo.svg";

const Navbar = () => {
  return (
    <SC.Wrapper>
      <SC.Brand src={Logo} alt="logo" loading="lazy" />
    </SC.Wrapper>
  );
};

export default Navbar;
