import * as SC from "./Button.styles";

type Props = {
  children?: React.ReactNode;
  linkTo?: string;
  action?: () => void;
  isBasic?: boolean;
  text?: string;
};

const Button: React.FC<Props> = ({
  children,
  linkTo = "",
  action,
  isBasic = false,
  text,
}) => {
  return (
    <>
      {isBasic ? (
        <SC.Button onClick={action}>{text}</SC.Button>
      ) : (
        <SC.LinkTo to={linkTo} onClick={action}>
          {children}
        </SC.LinkTo>
      )}
    </>
  );
};

export default Button;
