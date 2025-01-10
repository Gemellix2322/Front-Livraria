import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "../css/App.css";
import Logo from "../img/Login-Logo.png"
import notify from "../components/NewAlert";
import 'react-toastify/dist/ReactToastify.css';
import api from "../components/Api";

const Cadastro = ({users}) => {
    const navigate = useNavigate();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleUsernameChange = (e) => setUsername(e.target.value);
    const handlePasswordChange = (e) => setPassword(e.target.value);

    console.log('Tentando fazer POST para:', `${api.defaults.baseURL}/users`);
    console.log('Dados sendo enviados:', { username, password });

    const handleSubmit = async (e) => {
        e.preventDefault();
    
        try {
            console.log('Iniciando requisição para:', api.defaults.baseURL);
            const response = await api.post("/users", {
                username: username,
                password: password,
            });
    
            if (response.status === 200) {
                notify('Cadastrado com sucesso', 'success');
                setTimeout(() => navigate("/"), 100); // Aguarda antes de redirecionar
            } else {
                notify('Erro ao cadastrar usuário', 'error');
            }
        } catch (error) {
            console.error("Erro completo:", error);
            console.error("URL da requisição:", error.config?.url);
            console.error("Método da requisição:", error.config?.method);
            notify('Erro ao cadastrar usuário', 'error');
        }
    };

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
                    <input id="user" autoFocus type="text" value={username} onChange={handleUsernameChange} />
                    <label>Senha</label>
                    <input id="password" type="password" value={password} onChange={handlePasswordChange} />
                    <button type="submit">Cadastrar</button>
                    <Link className="link" to="/">Já tenho Login</Link>
                </form>
                </div>
            </div>
        </div>   
    )

}

export default Cadastro;