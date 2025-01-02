import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../src/css/App.css";


const Login = ({setIsAuthenticated}) => {
    const navigate = useNavigate();
    const [user, setUser] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();

        if(user === "admin" && password === "123"){
            setIsAuthenticated(true);
            navigate("/menu");
        } else {
            alert("Credenciais inválidas");
        }
    };

    return(
        <div className="App">
            <div className="col-1"></div>
            <div className="col-2">
                <div className="form-container">
                <form onSubmit={handleSubmit} className="formulario-login">
                    <h1>Login</h1>
                    <label>Usuário</label>
                    <input type="text" value={user} onChange={(e) => setUser(e.target.value)} />
                    <label>Senha</label>
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                    <button type="submit">Entrar</button>
                </form>
                </div>
            </div>
        </div>   
    )

}

export default Login;