import { useState } from "react";
import { Favorite, FavoriteBorder } from '@mui/icons-material';
import { Box, Typography, Avatar, IconButton, Card, CardHeader, CardContent } from '@mui/material';

const Comentarios = ({ users, messages }) => {
    const userId = localStorage.getItem('currentUserId');
    const [like, setLike] = useState(false);
    const currentUser = users.find(user => user.id === parseInt(userId));

    const commentList = messages.map((message) => {
        const user = users.find((user) => user.id === message.user);
        return {
            ...message,
            authorId: user?.id,
            author: user?.name || "Usuário Desconhecido",
            avatar: user?.profile_picture || "avatar.png",
        };
    });

    if (!commentList.length) {
        return <Typography>Sem comentários disponíveis.</Typography>;
    }

    return (
        <Box>
            {commentList.map((comment) => (
                <Card key={comment.id} sx={{
                    display: 'flex',
                    minWidth: 500,
                    bgcolor: '#1a1a1a',
                    border: '1px solid #585858',
                    p: 2,
                    my: 2,
                    maxWidth: 600,
                    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
                    color: 'white'
                }}>
                    <Avatar
                        src={comment.avatar}
                        alt={`Avatar de ${comment.author}`}
                        sx={{ width: 50, height: 50, mr: 2 }}
                    />
                    <Box sx={{ flexGrow: 1 }}>
                        <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 0.5 }}>
                            <Typography sx={{ fontWeight: 'bold' }}>
                                {comment.author}
                            </Typography>
                            {currentUser.id === comment.authorId && (
                                <IconButton
                                    onClick={() => setLike(!like)}
                                    sx={{ color: like ? '#e0245e' : 'white' }}
                                >
                                    {like ? <Favorite /> : <FavoriteBorder />}
                                </IconButton>
                            )}
                            <Typography variant="body2" sx={{ color: '#999999' }}>
                                Data
                            </Typography>
                        </Box>
                        <Typography>{comment.message}</Typography>
                    </Box>
                </Card>
            ))}
        </Box>
    );
};

export default Comentarios;