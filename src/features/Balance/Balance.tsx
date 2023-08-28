import { useParams } from "react-router-dom";
import Layout from "../../components/Layout";
import Loader from "../../components/Loader";
import useGetData from "../../hooks/useGetData";
import * as SC from "./Balance.styles";
import { TypeAccountEnum } from "../../constants";
import Error from "../../components/Error";

const Balance = () => {
  // Obtener datos de la API desde el hook
  const { data: accountData, loading, error } = useGetData();
  // Obtener el param de la url
  const { balanceId } = useParams();
  // Obtener el número de cuenta desde el param de la url
  const numberAccount = balanceId?.substring(0, balanceId.length - 2);
  // Obtener el tipo de cuenta desde el param de la url
  const typeAccount = balanceId?.substring(balanceId.length - 2);
  // Filtrar la cuenta para mostrar los datos correspondiente en pantalla
  const filteredData = accountData.filter(
    (item) => item.n === numberAccount && item.t === typeAccount
  );

  return (
    <Layout title="Este es tu saldo actual">
      {loading ? (
        <Loader alignLoader={true} />
      ) : (
        <>
          {error || filteredData.length < 1 ? (
            <Error />
          ) : (
            <SC.Container>
              <SC.Text>
                Saldo de la cuenta: {filteredData[0].saldo.replace(/-/g, "")}
              </SC.Text>
              <SC.Text>
                Tipo de cuenta:{" "}
                {filteredData[0].moneda === TypeAccountEnum.SIMBOLO_PESOS
                  ? filteredData[0].tipo_letras.toUpperCase() ===
                    TypeAccountEnum.CA
                    ? TypeAccountEnum.CAP
                    : TypeAccountEnum.CCP
                  : filteredData[0].moneda === TypeAccountEnum.SIMBOLO_DOLARES
                  ? filteredData[0].tipo_letras.toUpperCase() ===
                    TypeAccountEnum.CA
                    ? TypeAccountEnum.CAD
                    : TypeAccountEnum.CCD
                  : "Tipo de cuenta no reconocido"}
              </SC.Text>
              <SC.Text>Número de cuenta: {filteredData[0].n}</SC.Text>
            </SC.Container>
          )}
        </>
      )}
    </Layout>
  );
};

export default Balance;
