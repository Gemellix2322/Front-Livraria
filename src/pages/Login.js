import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "../css/App.css";
import Logo from "../img/Login-Logo.png";
import notify from "../components/NewAlert";
import 'react-toastify/dist/ReactToastify.css';

const Login = ({ users }) => {
    const navigate = useNavigate();
    const [name, setUser] = useState("");
    const [password, setPassword] = useState("");
    
    // Função para debug
    const checkUserCredentials = (inputUser, inputPassword) => {
        console.log('Tentando login com:', { name: inputUser, password: inputPassword });
        console.log('Usuários disponíveis:', users);
        
        return users.some((u) => {
            const isMatch = (u.name || u.name) === inputUser && u.password === inputPassword;
            console.log('Comparando com:', u, 'Resultado:', isMatch);
            return isMatch;
        });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        
        // Validações básicas
        if (!name.trim() || !password.trim()) {
            notify('Por favor, preencha todos os campos', 'warning');
            return;
        }

        // Verifica se users existe e é um array
        if (!Array.isArray(users)) {
            console.error('Users não é um array:', users);
            notify('Erro ao verificar credenciais. Tente novamente.', 'error');
            return;
        }

        const isValidUser = checkUserCredentials(name, password);

        if (isValidUser) {
            // Guarda o usuário atual no localStorage
            const currentUser = users.find(u => (u.name || u.name) === name);
            localStorage.setItem('currentUser', JSON.stringify(currentUser));
            navigate("/menu");
        } else {
            notify('Credenciais inválidas', 'error')
        }
    };

    return (
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
                        <h1>Login</h1>
                        <label>Usuário</label>
                        <input 
                            autoFocus 
                            type="text" 
                            value={name} 
                            onChange={(e) => setUser(e.target.value)}
                            required 
                        />
                        <label>Senha</label>
                        <input 
                            type="password" 
                            value={password} 
                            onChange={(e) => setPassword(e.target.value)}
                            required 
                        />
                        <button type="submit">Entrar</button>
                        <Link className="link" to="/cadastro">Não tenho Login</Link>
                    </form>
                </div>
            </div>
        </div>   
    );
};

export default Login;