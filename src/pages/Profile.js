import React, { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import { Box, TextField, Button, IconButton, styled } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ImageInput from "../components/ImageInput";
import notify from "../components/NewAlert";
import api from "../components/Api";

const StyledImageInput = styled(Box)({
  width: 200,
  height: 200,
  borderRadius: '50%',
  border: '2px solid #ddd',
  overflow: 'hidden',
  position: 'relative'
});

const AddIconButton = styled(IconButton)({
  position: 'absolute',
  top: '32%',
  left: '52%',
  width: 37,
  height: 37,
  border: '1px solid white',
  borderRadius: '50%',
  backgroundColor: '#1a1a1a',
  color: 'white',
  '&:hover': {
    backgroundColor: '#2a2a2a'
  }
});

const Profile = ({ users, authenticated }) => {
  const navigate = useNavigate();
  const userId = localStorage.getItem('currentUserId');
  const currentUser = users.find(user => user.id === parseInt(userId));

  const [formData, setFormData] = useState({
    id: currentUser.id,
    username: currentUser.username,
    name: currentUser.name,
    password: currentUser.password,
    profile_picture: currentUser.profile_picture,
  });

  useEffect(() => {
    if (!authenticated) {
      notify('Loge primeiro', 'warning');
      navigate('/');
    }
  }, [authenticated, navigate]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await api.put("/update-users", {
        id: formData.id,
        name: formData.name,
        password: formData.password,
      });
      
      if (response.status === 200) {
        notify('Alterado com sucesso', 'success');
        setTimeout(() => window.location.reload(), 1000);
      } else {
        notify('Erro ao alterar usuário', 'error');
      }
    } catch (error) {
      console.error("Erro completo:", error);
      notify('Erro ao alterar usuário', 'error');
    }
  };

  return (
    <Box sx={{ 
      bgcolor: '#1a1a1a', 
      minHeight: '100vh',
      position: 'relative'
    }}>
      <IconButton 
        onClick={() => navigate(-1)}
        sx={{ 
          position: 'absolute',
          top: '5%',
          left: '3%',
          color: 'white'
        }}
      >
        <ArrowBackIcon />
      </IconButton>

      <Box sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        pt: 15
      }}>
        <Box sx={{ position: 'relative', mb: 2 }}>
          <StyledImageInput>
            <ImageInput
              name="avatar"
              maxHeight={200}
              defaultImg={formData.profile_picture}
            />
          </StyledImageInput>
        </Box>

        <Box
          component="form"
          onSubmit={handleSubmit}
          sx={{
            display: 'flex',
            flexDirection: 'column',
            width: '100%',
            maxWidth: 400,
            gap: 3,
            px: 2
          }}
        >
          <TextField
            label="Nome"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Digite o nome do usuário"
            sx={{
              '& .MuiInputBase-root': {
                color: 'white',
                bgcolor: '#1a1a1a',
                boxShadow: '10px 10px 10px rgba(0, 0, 0, 0.5)'
              },
              '& .MuiInputLabel-root': {
                color: 'white'
              },
              '& .MuiOutlinedInput-notchedOutline': {
                borderColor: 'white'
              }
            }}
          />

          <TextField
            label="Senha"
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Digite a nova senha"
            sx={{
              '& .MuiInputBase-root': {
                color: 'white',
                bgcolor: '#1a1a1a',
                boxShadow: '10px 10px 10px rgba(0, 0, 0, 0.5)'
              },
              '& .MuiInputLabel-root': {
                color: 'white'
              },
              '& .MuiOutlinedInput-notchedOutline': {
                borderColor: 'white'
              }
            }}
          />

          <Button
            type="submit"
            variant="contained"
            sx={{
              width: 100,
              alignSelf: 'center',
              bgcolor: '#363636',
              boxShadow: '10px 10px 10px rgba(0, 0, 0, 0.5)',
              '&:hover': {
                background: 'linear-gradient(#363636,#142046)',
                transition: '1.5s'
              }
            }}
          >
            Salvar
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default Profile;