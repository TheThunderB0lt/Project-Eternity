import React, { useContext } from "react";
import { Redirect } from "react-router-dom";
import AppContext from "../../database/data";
import AnimatedRoute from "./AnimatedRoute";

export default function AuthRoute({ children, ...rest }) {
  const [isLoggedIn] = useContext(AppContext);

  if (isLoggedIn) return <AnimatedRoute {...rest}>{children}</AnimatedRoute>;

  return (
    <AnimatedRoute>
      <Redirect to="/login" />;
    </AnimatedRoute>
  );
}
