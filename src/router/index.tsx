import { Suspense, lazy } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { RoutesEnum } from "../constants";

const Dashboard = lazy(() => import("../features/Dashboard"));

const Router = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path={RoutesEnum.ROOT} Component={Dashboard} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};

export default Router;
