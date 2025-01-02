import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "../src/css/App.css";


const Login = ({users}) => {
    const navigate = useNavigate();
    const [user, setUser] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();

        const isValidUser = users.some(
            (u) => u.user === user && u.password === password
        )

        if(isValidUser){
            alert("Login bem-sucedido!");
            navigate("/menu");
        }else {
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
                    <Link to="/cadastro">Não tenho Login</Link>
                </form>
                </div>
            </div>
        </div>   
    )

}

export default Login;