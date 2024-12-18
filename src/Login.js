import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./App.css";


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
            <header className="App-header">
                <h1>Login</h1>
                <form onSubmit={handleSubmit} className="Form-Login">
                <label>Usuário</label>
                <input type="text" value={user} onChange={(e) => setUser(e.target.value)} />
                <label>Senha</label>
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                <button type="submit">Entrar</button>
                </form>
            </header>
        </div>   
    )

}

export default Login;