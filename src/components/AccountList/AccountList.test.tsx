import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { ThemeProvider } from "styled-components";
import AccountList from "./AccountList";
import { BrowserRouter } from "react-router-dom";
import store from "../../store";
import theme from "../../theme.ts";
import "@testing-library/jest-dom";

const mockData = [
  {
    e: "1",
    n: "872368326701",
    t: "02",
    saldo: "1500",
    moneda: "u$s",
    tipo_letras: "CC",
  },
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
];

describe("AccountList", () => {
  test("renders the account list correctly", () => {
    render(
      <ThemeProvider theme={theme}>
        <Provider store={store}>
          <BrowserRouter>
            <AccountList data={mockData} />
          </BrowserRouter>
        </Provider>
      </ThemeProvider>
    );

    expect(screen.getByText("Más opciones >>")).toBeInTheDocument();
  });
});
