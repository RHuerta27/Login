import React, { useState } from "react";
import "./styles/FormStyles.css";

const Formulario = () => {
    const [userId, setUserId] = useState("");
    const [userInfo, setUserInfo] = useState(null);
    const [errorMessage, setErrorMessage] = useState("");
  
    const handleFetchUser = () => {
      const fakeUserDatabase = {
        "1": { nombre: "Juan", apellidoPaterno: "Pérez", apellidoMaterno: "López" },
        "2": { nombre: "María", apellidoPaterno: "González", apellidoMaterno: "Hernández" },
      };
      
      const user = fakeUserDatabase[userId];
      
      if (user) {
        setUserInfo(user);
        setErrorMessage("");
      } else {
        setUserInfo(null);
        setErrorMessage("El ID de usuario no existe.");
        setUserId("");
      }
    };
  
    return (
      <div className="form-container">
        <h2>Bienvenido al Formulario de Usuario</h2>
        <input
          type="text"
          placeholder="ID Usuario"
          value={userId}
          onChange={(e) => setUserId(e.target.value)}
          className="input-field"
        />
        <button onClick={handleFetchUser} className="fetch-button">
          Consultar Datos
        </button>
  
        {errorMessage && <p className="error-message">{errorMessage}</p>}
  
        {userInfo && (
          <div className="user-info">
            <input type="text" value={userInfo.nombre} disabled className="input-field" />
            <input type="text" value={userInfo.apellidoPaterno} disabled className="input-field" />
            <input type="text" value={userInfo.apellidoMaterno} disabled className="input-field" />
          </div>
        )}
      </div>
    );
  };

export default Formulario;
