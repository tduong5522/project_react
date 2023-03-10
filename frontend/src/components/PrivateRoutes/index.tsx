import React from "react";
import { Redirect, Route, RouteProps } from "react-router-dom";
import { checkToken } from "../../utils/cookieHandler";
import MainLayout from "../Layout";

type Props = {
  children?: React.ReactNode;
} & RouteProps;

const PrivateRoutes: React.FC<Props> = ({ children, ...rests }) => {
  return (
    <>
      {!checkToken() ? (
        <Redirect to={"/login"} />
      ) : (
        <Route {...rests}>
          <MainLayout>{children}</MainLayout>
        </Route>
      )}
    </>
  );
};

export default PrivateRoutes;
