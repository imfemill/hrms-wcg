import { Route, Routes } from "react-router-dom";
import { routesData } from "./routesData";
import NotFound from "../pages/404/NotFound";
import Layout from "../Layout/Layout";

const RoutesComponent = () => {
  return (
    <>
      <Routes>
        <Route element={<Layout />}>
          {routesData?.map((route, key) => {
            return (
              <Route key={key} path={route?.path} element={route?.element} />
            );
          })}
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};

export default RoutesComponent;
