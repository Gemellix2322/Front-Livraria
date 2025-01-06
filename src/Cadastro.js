import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "../src/css/App.css";
import Logo from "./img/Login-Logo.png"

const Cadastro = ({addUser}) => {
    const navigate = useNavigate();
    const [user, setUser] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if(user && password) {
            addUser({user, password}); //Passa os dados para o Array
            alert("Usuário Cadastrado com sucesso!");
            navigate("/");
        } else {
            alert("Preencha todos os campos!");
        }
    } 

    return(
        <div className="App">
            <div className="col-1">
                <img src={Logo} className="Login-Logo" alt="Logo"/>
                <h1 className="logo-name">Gemelli Cafés Especiais</h1>
            </div>
            <div className="col-2">
                <div className="form-container">
                    <div className="header">
                        <h1>Livros de Prateleira</h1>
                    </div>
                <form onSubmit={handleSubmit} className="formulario-login">
                    <h1>Cadastro</h1>
                    <label>Usuário</label>
                    <input autoFocus type="text" value={user} onChange={(e) => setUser(e.target.value)} />
                    <label>Senha</label>
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                    <button type="submit">Cadastrar</button>
                    <Link className="link" to="/">Já tenho Login</Link>
                </form>
                </div>
            </div>
        </div>   
    )

}

export default Cadastro;