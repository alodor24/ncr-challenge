import * as SC from "./Button.styles";

type Props = {
  children: React.ReactNode;
  linkTo: string;
};

const Button: React.FC<Props> = ({ children, linkTo }) => {
  return <SC.LinkTo to={linkTo}>{children}</SC.LinkTo>;
};

export default Button;
