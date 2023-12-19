import { Route, Routes } from "react-router-dom";
import { openRoute, routesData } from "./routesData";
import NotFound from "../pages/404/NotFound";
import { Suspense } from "react";
import Layout from "../Layout/Layout";
import LoaderComponent from "../components/loader/Loader";

const RoutesComponent = () => {
  return (
    <>
      <Suspense fallback={<LoaderComponent />}>
        <Routes>
          <Route path="*" element={<NotFound />} />
          <Route element={<Layout />}>
            {routesData?.map((route, key) => {
              return (
                <Route key={key} path={route?.path} element={route?.element} />
              );
            })}
          </Route>
          <Route>
            {openRoute?.map((route, key) => {
              return (
                <Route key={key} path={route?.path} element={route?.element} />
              );
            })}
          </Route>
        </Routes>
      </Suspense>
    </>
  );
};

export default RoutesComponent;
