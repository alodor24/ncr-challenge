import Footer from "../Footer";
import Navbar from "../Navbar";
import * as SC from "./Layout.styles";

type Props = {
  children: React.ReactNode;
};

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <SC.Wrapper>
      <SC.Container>
        <Navbar />
        <SC.Body>{children}</SC.Body>
        <Footer />
      </SC.Container>
    </SC.Wrapper>
  );
};

export default Layout;
