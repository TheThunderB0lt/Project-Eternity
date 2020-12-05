import React from "react";
import Home from "../../master/Home";
import Imagegallery from "../../master/Imagegallery";
import Login from "../../master/Login";
import SignUp from "../../master/SignUp";
import TensorflowModel from "../../master/TensorflowModel";

// eslint-disable-next-line import/no-anonymous-default-export
export default [
  {
    path: "/",
    exact: true,
    component: () => <Home />,
    protected: "null",
  },
  {
    path: "/login",
    component: () => <Login />,
    protected: "guest",
  },
  {
    path: "/signup",
    component: () => <SignUp />,
    protected: "guest",
  },
  {
    path: "/gallery",
    component: () => <Imagegallery />,
    protected: "auth",
  },
  {
    path: "/model",
    component: () => <TensorflowModel />,
    protected: "model",
  },
];
