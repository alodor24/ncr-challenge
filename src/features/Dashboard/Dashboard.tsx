import Layout from "../../components/Layout";
import AccountList from "../../components/AccountList";
import useGetData from "../../hooks/useGetData";
import Loader from "../../components/Loader";
import Error from "../../components/Error";

const Dashboard = () => {
  const { data: accountData, loading, error } = useGetData();

  return (
    <Layout title="Selecciona la Cuenta a Consultar">
      {loading ? (
        <Loader alignLoader={true} />
      ) : (
        <>{error ? <Error /> : <AccountList data={accountData} />}</>
      )}
    </Layout>
  );
};

export default Dashboard;
