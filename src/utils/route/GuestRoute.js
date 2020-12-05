import React, { useContext } from "react";
import { Redirect } from "react-router-dom";
import AppContext from "../../database/data";
import AnimatedRoute from "./AnimatedRoute";

export default function GuestRoute({ children, ...rest }) {
  const [isLoggedIn] = useContext(AppContext);

  if (!isLoggedIn) return <AnimatedRoute {...rest}>{children}</AnimatedRoute>;

  return <Redirect to="/" />;
}
