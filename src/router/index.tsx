import { Suspense, lazy } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { RoutesEnum } from "../constants";
import Loader from "../components/Loader";

const Dashboard = lazy(() => import("../features/Dashboard"));
const Balance = lazy(() => import("../features/Balance"));

const Router = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path={RoutesEnum.ROOT} Component={Dashboard} />
          <Route path={RoutesEnum.BALANCE} Component={Balance} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};

export default Router;
