import { Route, Routes } from "react-router-dom";
import { routesData } from "./routesData";
import NotFound from "../pages/404/NotFound";

const RoutesComponent = () => {
  return (
    <>
      <Routes>
        <Route path="*" element={<NotFound />} />
        {routesData?.map((route, key) => {
          return (
            <Route key={key} path={route?.path} element={route?.element} />
          );
        })}
      </Routes>
    </>
  );
};

export default RoutesComponent;
