import "../src/css/Menu.css";
import LivrodoDia from "./LivrodoDia.js";
import Logo from "../src/img/Logo.png";
import { Link } from "react-router-dom";
import Livros from "./Livros.js";
import { useEffect, useState } from "react";
import { FiUser } from "react-icons/fi";
import api from "./Api.js";


const Menu = ({ users }) => {
    const currentUser = users[0];
    
    const [formData, setFormData] = useState({
        name: currentUser.username,
        user: currentUser.name,
        password: currentUser.password,
        profile_picture: currentUser.profile_picture,
    });
    
    const [livro, setLivros] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        console.log('Fazendo requisição para:', `${process.env.REACT_APP_API_URL}/books`);
        api.get('/books')
            .then(response => {
                setLivros(response.data);
                setLoading(false);
            })
            .catch(error => {
                console.error('Erro ao buscar livros:', error);
                setError(error);
                setLoading(false);
            });
    }, []);
    
    if (loading) return <div>Carregando...</div>;
    if (error) return <div>Erro ao carregar livros: {error.message}</div>;
    
    return (
        <div className="Menu">
            <header className="App-header-menu">
                <Link to={'/profile'}>
                    <img className="profile_picture_menu" style={{backgroundImage: `url(${formData.profile_picture})`}}/>
                </Link>
                <Link to={'https://www.instagram.com/gemellicafes/'}>
                    <img src={Logo} alt="Logo" className="Logo"/>
                </Link>
                <h1>{users?.username ? `Bem-vindo ${users.username}` : 'Bem-vindo'}</h1>
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