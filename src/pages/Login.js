import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from "react-router-dom";
import { Box, TextField, Button, Typography, styled } from '@mui/material';
import notify from "../components/NewAlert";
import api from "../components/Api";
import Logo from "../img/Login-Logo.png";
import { 
    AuthContainer, 
    ImageColumn, 
    FormColumn, 
    StyledTextField, 
    StyledButton, 
    StyledLink 
  } from '../css/AuthStyle';

const Login = ({ users, setAuthenticated, authenticated }) => {
  const navigate = useNavigate();
  const [username, setUser] = useState("");
  const [password, setPassword] = useState("");

  const checkUserCredentials = (inputUser, inputPassword) => {
    return users.some(u => u.username === inputUser && u.password === inputPassword);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setAuthenticated(true);

    if (!username.trim() || !password.trim()) {
      notify('Por favor, preencha todos os campos', 'warning');
      return;
    }

    if (!Array.isArray(users)) {
      notify('Erro ao verificar credenciais. Tente novamente.', 'error');
      return;
    }

    if (checkUserCredentials(username, password)) {
      const currentUser = users.find(u => u.username === username);
      localStorage.setItem('currentUserId', currentUser.id);
      navigate("/menu");
    } else {
      notify('Credenciais inválidas', 'error');
    }
  };

  useEffect(() => {
    const resetAuthenticated = () => {
      if (authenticated) {
        notify("Deslogado com sucesso", 'success');
        setAuthenticated(false);
      }
    };
    window.addEventListener('focus', resetAuthenticated);
    return () => window.removeEventListener('focus', resetAuthenticated);
  }, [authenticated, setAuthenticated]);

  return (
    <AuthContainer>
      <ImageColumn>
        <Box
          component="img"
          src={Logo}
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '250px',
            height: 'auto'
          }}
          alt="Logo"
        />
        <Typography
          variant="h3"
          sx={{
            color: 'white',
            position: 'absolute',
            top: '60%',
            left: '34%',
            fontSize: '45px'
          }}
        >
          Gemelli Cafés Especiais
        </Typography>
      </ImageColumn>
      <FormColumn>
        <Box sx={{ width: '100%', maxWidth: 400 }}>
          <Typography variant="h2" color="white" sx={{ mb: 12 }}>
            Livros de Prateleira
          </Typography>
          <Box component="form" onSubmit={handleSubmit}>
            <Typography variant="h4" color="white" sx={{ mb: 2 }}>
              Login
            </Typography>
            <StyledTextField
              fullWidth
              label="Usuário"
              autoFocus
              value={username}
              onChange={(e) => setUser(e.target.value)}
              required
            />
            <StyledTextField
              fullWidth
              label="Senha"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <StyledButton fullWidth type="submit" variant="contained">
              Entrar
            </StyledButton>
            <StyledLink to="/cadastro">Não tenho Login</StyledLink>
          </Box>
        </Box>
      </FormColumn>
    </AuthContainer>
  );
};

export default Login;