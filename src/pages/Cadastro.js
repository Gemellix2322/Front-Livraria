import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "../css/App.css";
import Logo from "../img/Login-Logo.png"
import { wait } from "@testing-library/user-event/dist/utils";
import notify from "../components/NewAlert";
import 'react-toastify/dist/ReactToastify.css';

const Cadastro = () => {
    const navigate = useNavigate();
    const handleSubmit = (e) => {
        e.preventDefault();
        notify('Cadastrado com sucesso', 'success')
        wait(100)
        navigate("/")
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
                    <input autoFocus type="text"/>
                    <label>Senha</label>
                    <input type="password"/>
                    <button type="submit">Cadastrar</button>
                    <Link className="link" to="/">Já tenho Login</Link>
                </form>
                </div>
            </div>
        </div>   
    )

}

export default Cadastro;