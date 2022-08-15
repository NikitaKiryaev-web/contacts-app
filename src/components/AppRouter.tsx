import { FC } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { useAppSelector } from "../hooks/redux";
import { publicRoutes, privateRoutes, RootPaths } from "../routes";

const AppRouter: FC = () => {
  const { isLoggedIn } = useAppSelector((state) => state.loginReducer);
  return isLoggedIn ? (
    <Routes>
      {privateRoutes.map((route) => {
        return (
          <Route
            key={route.path}
            path={route.path}
            element={<route.element />}
          />
        );
      })}
      <Route
        path="*"
        element={<Navigate to={RootPaths.CONTACTS} replace={true} />}
      />
    </Routes>
  ) : (
    <Routes>
      {publicRoutes.map((route) => {
        return (
          <Route
            key={route.path}
            path={route.path}
            element={<route.element />}
          />
        );
      })}
      <Route
        path="*"
        element={<Navigate to={RootPaths.LOGIN} replace={true} />}
      />
    </Routes>
  );
};

export default AppRouter;
