import { useEffect, useMemo, useState } from "react";
import { AccountData, ResponseData } from "../types";
import { TypeAccountEnum } from "../constants";

const useGetData = () => {
  const [data, setData] = useState<AccountData[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    // Petición get de datos a la API
    const fetchData = async () => {
      try {
        // Para la petición se hace uso de variables de entorno
        const response = await fetch(
          `${import.meta.env.VITE_BASE_URL}/${import.meta.env.VITE_ENDPOINT}`
        );

        // Si la solicitud es exitosa, devuelve los datos filtrados por tipo de cuenta en pesos y dólares. En caso contrario setea un error para luego ser informado al usuario en la vista
        if (response.ok) {
          const jsonData: ResponseData = await response.json();
          const jsonDataFiltered = jsonData.cuentas.filter(
            (item) =>
              item.moneda === TypeAccountEnum.SIMBOLO_PESOS ||
              item.moneda === TypeAccountEnum.SIMBOLO_DOLARES
          );
          setData(jsonDataFiltered);
        } else {
          setError(true);
        }
        setLoading(false);
      } catch (error) {
        setLoading(false);
        setError(true);
      }
    };

    fetchData();
  }, []);

  // Crear una referencia en memoria de la data solicitada
  const memoizedData = useMemo(() => data, [data]);

  return {
    data: memoizedData,
    loading,
    error,
  };
};

export default useGetData;
