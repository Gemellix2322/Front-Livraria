import { useState } from "react";
import { Box, TextField, Button, Typography, Paper } from '@mui/material';
import notify from "../components/NewAlert";
import api from "../components/Api";
import { useNavigate } from "react-router-dom";

const NewComment = ({user, livro}) => {
    const [message, setMessage] = useState("");
    const userId = localStorage.getItem('currentUserId');
    const navigate = useNavigate();

    const handleRefresh = () => {
        window.location.reload();
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if(!message.trim()){
            notify('Por favor preencha todos os campos', 'warning');
            return;
        }
        
        try {
            const response = await api.post("/new-messages", {
                message: message,
                user: userId,
                book: livro.id,
            });
    
            if (response.status === 200) {
                notify('Postado com sucesso', 'success');
                setTimeout(handleRefresh, 500);
            } else {
                notify('Erro ao cadastrar mensagem', 'error');
            }
        } catch (error) {
            console.error("Erro:", error);
            notify('Erro ao cadastrar mensagem', 'error');
        }
    };

    return (
        <Paper sx={{
            width: '50%',
            border: '1px solid #585858',
            mt: 6,
            py: 1,
            bgcolor: '#1a1a1a',
            color: 'white'
        }}>
            <Box component="form" 
                onSubmit={handleSubmit}
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center'
                }}
            >
                <Typography variant="h6" sx={{ mb: 2 }}>
                    Deixe aqui seu comentário
                </Typography>
                <TextField
                    multiline
                    minRows={2}
                    maxRows={8}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Digite aqui"
                    sx={{
                        m: 3,
                        width: '80%',
                        maxWidth: 450,
                        minWidth: 200,
                        '& .MuiInputBase-root': {
                            color: 'white',
                            bgcolor: '#272727'
                        }
                    }}
                />
                <Button 
                    type="submit"
                    sx={{
                        bgcolor: '#585858',
                        color: 'white',
                        px: 2,
                        borderRadius: 2,
                        '&:hover': {
                            bgcolor: '#666666'
                        }
                    }}
                >
                    Enviar
                </Button>
            </Box>
        </Paper>
    );
};

export default NewComment;