// import React from 'react';
import React, { useEffect, useState } from "react";
import { Route, Switch, useLocation } from "react-router-dom";
import "./assets/css/style.css";
import Navbar from "./components/Navbar";
import routes from "./utils/route/index";
import firebase from "./config/firebase";
import AppContext from "./database/data";
import AuthRoute from "./utils/route/AuthRoute";
import GuestRoute from "./utils/route/GuestRoute";
import Loading from "./components/Loading";
import NotFound from "./master/404";
import AnimatedRoute from "./utils/route/AnimatedRoute";
import { AnimatePresence } from "framer-motion";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        setIsLoggedIn(true);
        setUser(user);
        setIsLoading(false);
      } else {
        setUser({});
        setIsLoggedIn(false);
        setIsLoading(false);
      }
    });
  }, []);
  const location = useLocation();

  if (isLoading) return <Loading />;
  return (
    <AppContext.Provider value={[isLoggedIn, user]}>
      <Navbar />
      <AnimatePresence exitBeforeEnter initial={false}>
        <Switch key={location.pathname} location={location}>
          {routes.map((route) => {
            if (route.protected === "guest") {
              return (
                <GuestRoute path={route.path} exact={route.exact}>
                  <route.component />
                </GuestRoute>
              );
            }

            if (route.protected === "auth") {
              return (
                <AuthRoute path={route.path} exact={route.exact}>
                  <route.component />
                </AuthRoute>
              );
            }

            if (route.protected === "model") {
              return (
                <AuthRoute path={route.path} exact={route.exact}>
                  <route.component />
                </AuthRoute>
              );
            }

            return (
              <AnimatedRoute path={route.path} exact={route.exact}>
                <route.component />
              </AnimatedRoute>
            );
          })}
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </AnimatePresence>
    </AppContext.Provider>
  );
}

export default App;
