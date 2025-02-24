import { Close, Person, Settings, Logout } from '@mui/icons-material';
import { Box, Drawer, IconButton, Typography, Avatar, List, ListItem, ListItemIcon, ListItemText, Stack } from '@mui/material';
import { Link } from 'react-router-dom';
import insta from "../img/instagram-logo.svg";

const Navbar = ({ user, isNavbarOpen, setIsNavbarOpen }) => {
    const handleClose = () => {
        setIsNavbarOpen(false);
    };

    const userId = localStorage.getItem('currentUserId');
    const currentUser = user.find(user => user.id === parseInt(userId));
    
    const formData = {
        name: currentUser.username,
        user: currentUser.name,
        password: currentUser.password,
        profile_picture: currentUser.profile_picture,
    };

    return (
        <Drawer
            anchor="left"
            open={isNavbarOpen}
            onClose={handleClose}
            sx={{
                '& .MuiDrawer-paper': {
                width: 300,
                background: 'linear-gradient(48deg, #121b3b 0%, #18254e 54%, #25366f 100%)',
                padding: '20px',
                color: 'white',
                transitionDuration: '0.3s !important',
                transitionTimingFunction: 'ease-in-out !important'
                }
            }}
        >
            <IconButton
                onClick={handleClose}
                sx={{
                    position: 'absolute',
                    right: 20,
                    top: 20,
                    color: 'white'
                }}
            >
                <Close />
            </IconButton>

            <Stack
                alignItems="center"
                spacing={2}
                sx={{ mt: 8 }}
            >
                <Link to='/profile'>
                    <Avatar
                        src={formData.profile_picture}
                        sx={{ width: 100, height: 100 }}
                    />
                </Link>
                <Typography variant="h6">{formData?.user || 'Usuário'}</Typography>
            </Stack>

            <List sx={{ mt: 5 }}>
                <ListItem
                    component={Link}
                    to="/profile"
                    sx={{
                        color: 'white',
                        '&:hover': {
                            bgcolor: '#f5f5f5',
                            color: 'black',
                            borderRadius: '10px'
                        }
                    }}
                >
                    <ListItemIcon sx={{ color: 'inherit' }}>
                        <Person />
                    </ListItemIcon>
                    <ListItemText primary="Perfil" />
                </ListItem>
                
                <ListItem
                    component={Link}
                    to="/settings"
                    sx={{
                        color: 'white',
                        '&:hover': {
                            bgcolor: '#f5f5f5',
                            color: 'black',
                            borderRadius: '10px'
                        }
                    }}
                >
                    <ListItemIcon sx={{ color: 'inherit' }}>
                        <Settings />
                    </ListItemIcon>
                    <ListItemText primary="Configurações" />
                </ListItem>
                
                <ListItem
                    component={Link}
                    to="/"
                    sx={{
                        color: 'white',
                        '&:hover': {
                            bgcolor: '#f5f5f5',
                            color: 'black',
                            borderRadius: '10px'
                        }
                    }}
                >
                    <ListItemIcon sx={{ color: 'inherit' }}>
                        <Logout />
                    </ListItemIcon>
                    <ListItemText primary="Sair" />
                </ListItem>
            </List>

            <Box
                component={Link}
                to="https://www.instagram.com/gemellicafes/"
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    color: 'white',
                    textDecoration: 'none',
                    p: 2,
                    '&:hover': {
                        bgcolor: '#f5f5f5',
                        color: 'black',
                        borderRadius: '10px'
                    }
                }}
            >
                <Box
                    component="img"
                    src={insta}
                    sx={{ width: 35, mr: 2 }}
                />
                <Typography>Instagram</Typography>
            </Box>
        </Drawer>
    );
};

export default Navbar;