import React, { useContext } from "react";
import { NavLink, useHistory } from "react-router-dom";
import "../assets/css/main.css";
import firebase from "../config/firebase";
import AppContext from "../database/data";

export default function Navbar() {
  const [isLoggedIn, user] = useContext(AppContext);
  const history = useHistory();

  function logout() {
    firebase
      .auth()
      .signOut()
      .then((res) => {
        // Sign-out successful.
        history.replace("/login");
      })
      .catch((e) => {
        console.log(e.response.data);
        // An error happened.
      });
  }

  return (
    <nav className="nav">
      <ul className="flex justify-between px-10 uppercase">
        <li className="mr-5">
          <NavLink to="/" exact activeClassName="text-blue-500">
            Home
          </NavLink>
        </li>
        <li className="mr-5">
          <NavLink to="/gallery" exact activeClassName="text-blue-500">
            Gallery
          </NavLink>
        </li>
        <li className="mr-5">
          <NavLink to="/model" exact activeClassName="text-blue-500">
            Image Classifier
          </NavLink>
        </li>
      </ul>
      <ul className="flex justify-between px-10 uppercase">
        <li>
          {isLoggedIn ? (
            <button onClick={logout}>LOGOUT</button>
          ) : (
            <NavLink to="/login" activeClassName="text-blue-500">
              Login
            </NavLink>
          )}
        </li>
        {!isLoggedIn && (
          <li className="ml-5">
            <NavLink to="/signup" activeClassName="text-blue-500">
              SignUp
            </NavLink>
          </li>
        )}
      </ul>
    </nav>
  );
}
