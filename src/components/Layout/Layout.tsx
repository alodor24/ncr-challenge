import * as SC from "./Layout.styles";

type Props = {
  children: React.ReactNode;
};

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <SC.Wrapper>
      <SC.Container>{children}</SC.Container>
    </SC.Wrapper>
  );
};

export default Layout;
