import { useDispatch } from "react-redux";
import { RoutesEnum, TypeAccountEnum } from "../../constants";
import Button from "../Button";
import * as SC from "./AccountList.styles";
import { setButton } from "../../reducers/buttonReducer";
import { AccountData } from "../../types";
import { useState } from "react";

type Props = {
  data: AccountData[];
};

const AccountList: React.FC<Props> = ({ data }) => {
  const dispatch = useDispatch();
  // Estado para llevar el control de la página visible actualmente
  const [currentPage, setCurrentPage] = useState(1);
  // Controlar dinámicamente la cantidad de cuentas a mostrar en cada página
  const accountsPerPage = currentPage === 1 ? 5 : 4;
  // Detectar dinámicamente el indice incial para usar en el slice de array de resultados
  const startIndex = (currentPage - 1) * accountsPerPage;
  // Detectar dinámicamente el indice final para usar en el slice de array de resultados
  const endIndex = startIndex + accountsPerPage;
  // Definir la cantidad de páginas que tendrá la grilla de resultados
  const totalPages = Math.ceil(data.length / accountsPerPage);

  // Regresar a la anterior página de resultados
  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  // Avazar a la siguiente página de resultados
  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  // Cambiar el estado global de la visibilidad del button Salir
  const handleToggleButton = () => {
    dispatch(setButton(true));
  };

  return (
    <SC.Wrapper>
      {/* Si la página visible no es la primera, entonces debe mostrar el botón */}
      {currentPage > 1 && (
        <button onClick={handlePreviousPage}>{"<< Opciones anteriores"}</button>
      )}
      {/*Recorrer el array de resultados dinámicamente estableciendo el rango en cada página visible*/}
      {data.slice(startIndex, endIndex).map((item) => (
        <SC.ContainerButton key={`${item.n}${item.t}`}>
          <Button
            linkTo={`${RoutesEnum.BALANCE}/${item.n}${item.t}`}
            action={handleToggleButton}
          >
            <p>
              {item.tipo_letras.toUpperCase() === TypeAccountEnum.CA
                ? TypeAccountEnum.CAJA_AHORRO
                : TypeAccountEnum.CUENTA_CORRIENTE}
            </p>
            <p>Nro: {item.n.trim() !== "" ? item.n : "-"}</p>
          </Button>
        </SC.ContainerButton>
      ))}
      {/* Si la página visible no es la última, entonces debe mostrar el botón */}
      {currentPage < totalPages && (
        <button onClick={handleNextPage}>{"Más opciones >>"}</button>
      )}
    </SC.Wrapper>
  );
};

export default AccountList;
