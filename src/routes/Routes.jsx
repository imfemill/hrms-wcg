import { Route, Routes } from "react-router-dom";
import { routesData } from "./routesData";
import NotFound from "../pages/404/NotFound";
import { Suspense } from "react";

const RoutesComponent = () => {
    return (
        <>
            <Suspense>

                <Routes>
                    <Route path="*" element={<NotFound />} />
                    {routesData?.map((route, key) => {
                        return (
                            <Route key={key} path={route?.path} element={route?.element} />
                        );
                    })}
                </Routes>
            </Suspense>
        </>
    );
};

export default RoutesComponent;
