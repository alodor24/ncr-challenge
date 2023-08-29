import { render } from "@testing-library/react";
import Loader from "./Loader";
import { ThemeProvider } from "styled-components";
import theme from "../../theme.ts";

describe("Loader Component", () => {
  test("renders without errors", () => {
    render(
      <ThemeProvider theme={theme}>
        <Loader />
      </ThemeProvider>
    );
  });

  test("renders with alignment when alignLoader prop is true", () => {
    render(
      <ThemeProvider theme={theme}>
        <Loader alignLoader={true} />
      </ThemeProvider>
    );
  });
});
