import * as SC from "./Button.styles";

type Props = {
  children: React.ReactNode;
  linkTo: string;
  action?: () => void;
};

const Button: React.FC<Props> = ({ children, linkTo, action }) => {
  return (
    <SC.LinkTo to={linkTo} onClick={action}>
      {children}
    </SC.LinkTo>
  );
};

export default Button;
