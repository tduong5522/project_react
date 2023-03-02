import React from "react";
import { RouteProps } from "react-router-dom";

type Props = {
  children?: React.ReactNode;
} & RouteProps;

const PrivateRoutes: React.FC<Props> = ({ children, ...rests }) => {
  return <div>{children}</div>;
};

export default PrivateRoutes;
