import { Suspense, lazy } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { RoutesEnum } from "../constants";

const Dashboard = lazy(() => import("../features/Dashboard"));
const Balance = lazy(() => import("../features/Balance"));

const Router = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path={RoutesEnum.ROOT} Component={Dashboard} />
          <Route path={RoutesEnum.BALANCE} Component={Balance} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};

export default Router;
