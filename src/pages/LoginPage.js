import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import "./styles/LoginPage.css";

const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [attempts, setAttempts] = useState(0);
  const [errorMessage, setErrorMessage] = useState("");
  const history = useHistory();

  const handleLogin = () => {
    if (username === "azteca" && password === "12345") {
      history.push("/form");
    } else {
      setAttempts(attempts + 1);
      setErrorMessage("Usuario o contraseña incorrectos.");
      setUsername("");
      setPassword("");
      if (attempts >= 2) {
        setErrorMessage("Has excedido el límite de intentos.");
        console.log("contraseña incorrecta");
      }
    }
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <input
        type="text"
        placeholder="Usuario"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        className="input-field"
      />
      <input
        type="password"
        placeholder="Contraseña"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="input-field"
      />
      {errorMessage && <p className="error-message">{errorMessage}</p>}
      <button onClick={handleLogin} disabled={attempts >= 3} className="login-button">
        Enviar
      </button>
    </div>
  );
};

export default LoginPage;
