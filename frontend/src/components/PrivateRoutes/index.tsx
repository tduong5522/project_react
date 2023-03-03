import React from "react";
import { Redirect, RouteProps } from "react-router-dom";
import { checkToken } from "../../utils/cookieHandler";

type Props = {
  children?: React.ReactNode;
} & RouteProps;

const PrivateRoutes: React.FC<Props> = ({ children, ...rests }) => {
  if (!checkToken()) {
    return <Redirect to={"/login"} />;
  }
  return React.cloneElement(children as React.ReactElement, {
    children,
    rests,
  });
};

export default PrivateRoutes;
