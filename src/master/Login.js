import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import "../assets/css/main.css";
import firebase from "../config/firebase";

export default function Login() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [form, setForm] = useState({ email: "", password: "" });
  const history = useHistory();

  function handleForm(e) {
    if (isLoading) return;
    setIsLoading(true);
    e.preventDefault();
    firebase
      .auth()
      .signInWithEmailAndPassword(form.email, form.password)
      .then((res) => {
        history.replace("/");
        setError("");
        setIsLoading(false);
      })
      .catch((e) => {
        setError(e.message);
        setIsLoading(false);
      });
  }
  function handleInput(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  return (
    <div className="flex h-screen">
      <div className="loginBox">
        {error !== "" && <p>{error}</p>}
        <h2>LOGIN</h2>
        <form onSubmit={handleForm}>
          <p>Email</p>
          <input
            type="text"
            name="email"
            placeholder="Enter Email"
            value={form.email}
            onChange={handleInput}
            autocomplete="off"
          />
          <p>Password</p>
          <input
            type="password"
            name="password"
            placeholder="Enter Password"
            value={form.password}
            onChange={handleInput}
            autocomplete="off"
          />
          <button type="submit" className="btn">
            {isLoading ? (
              <i className="fas fa-circle-notch fa-spin"></i>
            ) : (
              "Login"
            )}
          </button>
        </form>
      </div>
    </div>
  );
}
