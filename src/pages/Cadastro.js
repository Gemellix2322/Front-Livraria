import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { 
    PageContainer, 
    ImageColumn, 
    FormColumn, 
    StyledTextField, 
    StyledButton, 
    StyledLink 
  } from '../css/AuthStyle';
import "../css/App.css";
import Logo from "../img/Login-Logo.png"
import notify from "../components/NewAlert";
import 'react-toastify/dist/ReactToastify.css';
import api from "../components/Api";
import { Box, TextField, Button, Typography, Container, styled } from '@mui/material';

const Cadastro = ({ users }) => {
    const navigate = useNavigate();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
  
    const handleSubmit = async (e) => {
      e.preventDefault();
  
      try {
        const response = await api.post("/post-users", {
          username: username,
          password: password,
        });
  
        if (response.status === 200) {
          notify('Cadastrado com sucesso', 'success');
          setTimeout(() => navigate("/"), 100);
        } else {
          notify('Erro ao cadastrar usuário', 'error');
        }
      } catch (error) {
        console.error("Erro completo:", error);
        notify('Erro ao cadastrar usuário', 'error');
      }
    };
  
    return (
      <PageContainer>
        <ImageColumn>
          <Box
            component="img"
            src={Logo}
            sx={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              width: 250,
              height: 'auto'
            }}
            alt="Logo"
          />
          <Typography
            variant="h4"
            sx={{
              color: 'white',
              fontSize: '45px',
              position: 'absolute',
              top: '60%',
              left: '34%'
            }}
          >
            Gemelli Cafés Especiais
          </Typography>
        </ImageColumn>
  
        <FormColumn>
          <Container maxWidth="sm">
            <Typography variant="h2" color="white" mb={12}>
              Livros de Prateleira
            </Typography>
            
            <Box component="form" onSubmit={handleSubmit}>
              <Typography variant="h4" color="white" mb={2}>
                Cadastro
              </Typography>
              
              <StyledTextField
                fullWidth
                label="Usuário"
                autoFocus
                value={username}
                onChange={(e) => setUsername(e.target.value)}
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
              
              <StyledButton type="submit" fullWidth variant="contained">
                Cadastrar
              </StyledButton>
              
              <StyledLink to="/">
                Já tenho Login
              </StyledLink>
            </Box>
          </Container>
        </FormColumn>
      </PageContainer>
    );
  };

export default Cadastro;