import { Box, TextField, Button, Link as MuiLink } from '@mui/material';
import { styled } from '@mui/material/styles';
import { Link } from 'react-router-dom';

export const PageContainer = styled(Box)({
  display: 'flex',
  width: '100%',
  height: '100%',
  minHeight: '100vh',
  background: 'linear-gradient(48deg, #121b3b 0%, #18254e 54%, #25366f 100%)'
});

export const ImageColumn = styled(Box)({
  flex: 1,
  backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.5)), url(https://i.imgur.com/B4fC9uy.png)',
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center',
  position: 'relative',
  minHeight: '100vh'
});

export const FormColumn = styled(Box)({
  flex: 1,
  display: 'flex',
  justifyContent: 'center',
  padding: '20px',
  marginTop: '150px',
  overflow: 'hidden'
});

export const StyledTextField = styled(TextField)({
  marginBottom: '15px',
  '& .MuiInputBase-root': {
    backgroundColor: '#484848',
    boxShadow: '10px 10px 10px rgba(0, 0, 0, 0.5)',
    color: 'white',
    '&:hover': {
      backgroundColor: '#c5c5c5',
      '& input': {
        color: 'black'
      }
    }
  },
  '& .MuiInputLabel-root': {
    color: 'white',
    '&.Mui-focused': {
      color: 'white'
    }
  },
  '& .MuiOutlinedInput-notchedOutline': {
    border: 'none'
  }
});

export const StyledButton = styled(Button)({
  marginTop: '10px',
  marginBottom: '15px',
  backgroundColor: '#7e7e7e',
  boxShadow: '10px 10px 10px rgba(0, 0, 0, 0.5)',
  color: 'white',
  '&:hover': {
    backgroundColor: '#c5c5c5',
    color: 'black'
  }
});

export const StyledLink = styled(Link)({
  color: 'white',
  textDecoration: 'none',
  '&:hover': {
    textDecoration: 'underline'
  }
});

export const AuthContainer = styled(Box)({
        display: 'flex',
        width: '100%',
        height: '100%',
        minHeight: '100vh',
        background: 'linear-gradient(48deg, #121b3b 0%, #18254e 54%, #25366f 100%)'
      });