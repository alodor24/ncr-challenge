import Footer from "../Footer";
import Navbar from "../Navbar";
import * as SC from "./Layout.styles";

type Props = {
  children: React.ReactNode;
  title: string;
};

const Layout: React.FC<Props> = ({ children, title }) => {
  return (
    <SC.Wrapper>
      <SC.Container>
        <Navbar />
        <SC.Body>
          <SC.Text>Consulta de Saldo</SC.Text>
          <SC.Title>{title}</SC.Title>
          {children}
        </SC.Body>
        <Footer />
      </SC.Container>
    </SC.Wrapper>
  );
};

export default Layout;
