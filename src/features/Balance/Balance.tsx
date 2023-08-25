import Layout from "../../components/Layout";
import * as SC from "./Balance.styles";

const Balance = () => {
  return (
    <Layout title="Este es tu saldo actual">
      <SC.Container>
        <SC.Text>Saldo de la cuenta: 15000</SC.Text>
        <SC.Text>Tipo de cuenta: Caja de Ahorro en Pesos</SC.Text>
        <SC.Text>Número de cuenta: 123456789</SC.Text>
      </SC.Container>
    </Layout>
  );
};

export default Balance;
