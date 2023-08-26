import Layout from "../../components/Layout";
import AccountList from "../../components/AccountList";

// TODO: Replace this const for hook
const accountData = [
  {
    e: "1",
    n: "872378326701",
    t: "02",
    saldo: "1500",
    moneda: "u$s",
    tipo_letras: "CC",
  },
  {
    e: "1",
    n: "872378326702",
    t: "01",
    saldo: "-600",
    moneda: "$",
    tipo_letras: "Cc",
  },
  {
    e: "1",
    n: "872378326703",
    t: "01",
    saldo: "745",
    moneda: "$",
    tipo_letras: "CC",
  },
  {
    e: "1",
    n: "872378326704",
    t: "01",
    saldo: "852.36",
    moneda: "$uy",
    tipo_letras: "CA",
  },
  {
    e: "1",
    n: "872378326705",
    t: "01",
    saldo: "569",
    moneda: "$",
    tipo_letras: "CC",
  },
  {
    e: "1",
    n: "872378326706",
    t: "01",
    saldo: "2-5-0",
    moneda: "$",
    tipo_letras: "CA",
  },
];

const Dashboard = () => {
  return (
    <Layout title="Selecciona la Cuenta a Consultar">
      <AccountList data={accountData || []} />
    </Layout>
  );
};

export default Dashboard;
