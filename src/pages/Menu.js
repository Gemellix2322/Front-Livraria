import "../css/Menu.css";
import LivrodoDia from "./LivrodoDia.js";
import Logo from "../img/Login-Logo.png";
import { useNavigate } from "react-router-dom";
import Livros from "./Livros.js";
import { useEffect, useState } from "react";
import {apicsharp} from "../components/Api.js";
import notify from "../components/NewAlert.js";
import 'react-toastify/dist/ReactToastify.css';
import Navbar from "./Navbar.js";
import { Button } from "@mui/material";
 import { Link } from "react-router-dom";
import AddLivro from "./AddLivro.js";


const Menu = ({ users, authenticated }) => {

    const navigate = useNavigate()

    const userId = localStorage.getItem('currentUserId');

    const currentUser = users.find(user => user.id === parseInt(userId));

    const [formData, setFormData] = useState({
        name: currentUser.name,
        user: currentUser.username,
        password: currentUser.password,
        profile_picture: currentUser.profile_picture,
        admin: currentUser.admin,
    });
    
    const [livro, setLivros] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [isNavbarOpen, setIsNavbarOpen] = useState(false);

    

    useEffect(() => {
        if(authenticated === false){
            notify('Loge primeiro', 'warning')
            navigate('/')
        } else {
            notify('Logado com sucesso', 'success', 900);
        }
        console.log('Fazendo requisição para:', `${process.env.CSHARP_API_URL}/books`);
        //Nova api em C#
        apicsharp.get('/api/Livros')
            .then(response => {
                setLivros(response.data);
                setLoading(false);
            })
            .catch(error => {
                notify('Erro ao buscar livros:', 'error');
                setError(error);
                setLoading(false);
            });

    }, []);

    if (loading) return <div>Carregando...</div>;
    if (error) return <div>Erro ao carregar livros: {error.message}</div>;

    
    return (
        <div className="Menu">
            <header className="App-header-menu">
                <a onClick={() => setIsNavbarOpen(!isNavbarOpen)} sx={{cursor: 'pointer'}}>
                    <img className="profile_picture_menu" src={formData.profile_picture} />
                </a>
                {isNavbarOpen ? <Navbar isNavbarOpen={isNavbarOpen} user={users} setIsNavbarOpen={setIsNavbarOpen}/> : null}
                <img src={Logo} alt="Logo" className="Logo"/>
                <h1>{formData?.name ? `Bem-vindo ${formData.name}` : 'Bem-vindo'}</h1>
                {currentUser.admin === 1 && <Link to={'/add'}><Button>Add Livro</Button></Link>}
            </header>
            <div className="App-container">
                <h1>Livros Disponíveis</h1>
                <div>
                    <LivrodoDia livro={livro}/>
                </div>
                <div>
                    <Livros livro={livro}/>
                </div>
            </div>
        </div>
    );
};

export default Menu;