import { useEffect, useMemo, useState } from "react";
import { AccountData, ResponseData } from "../types";
import { TypeAccountEnum } from "../constants";

const useGetData = () => {
  const [data, setData] = useState<AccountData[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `${import.meta.env.VITE_BASE_URL}/${import.meta.env.VITE_ENDPOINT}`
        );

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

  const memoizedData = useMemo(() => data, [data]);

  return {
    data: memoizedData,
    loading,
    error,
  };
};

export default useGetData;
