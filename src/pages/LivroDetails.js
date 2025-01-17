import { useNavigate, useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Logo from '../img/Login-Logo.png'
import { FiArrowLeft } from "react-icons/fi";
import { useState } from 'react';
import PageComentarios from './PageComentarios';
import NewComment from './NewComment';
import api from '../components/Api';
import { useEffect } from 'react';
import notify from '../components/NewAlert';
import Navbar from './Navbar';


function LivroDetails({ users, livros, authenticated }) {
    const navigate = useNavigate()
    const { name } = useParams();

    const userId = localStorage.getItem('currentUserId');

    const currentUser = users.find(user => user.id === parseInt(userId));

    const [formData, setFormData] = useState({
        name: currentUser.username,
        user: currentUser.name,
        password: currentUser.password,
        profile_picture: currentUser.profile_picture,
    });

    const [user, setUsers] =useState([]);
    const [messages, setMessages] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [isNavbarOpen, setIsNavbarOpen] = useState(false);


    useEffect(() => {
        if(!authenticated){
            notify('Loge primeiro', 'warning')
            navigate('/')
        }
        const fetchData = async () => {
            try {
                // Carregando as mensagens
                const [messagesResponse, usersResponse] = await Promise.all([
                    api.get('/messages'),
                    api.get('/users')
                ]);

                setMessages(messagesResponse.data);
                setUsers(usersResponse.data);
            } catch (error) {
                console.error('Erro ao buscar dados:', error);
                setError('Erro ao carregar dados.');
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);
  
  const livro = livros.find(l => l.name === name);


  if (!livro) {
    return <div>Livro não encontrado</div>;
  }

  const capa = livro.cover_image;

  const filteredMessages = messages.filter(message => {
    return message.book && livro.id && message.book === livro.id;
});


  return (
    <div className="Livro-Details">
            <header className="App-header-menu">
            <a onClick={() => setIsNavbarOpen(!isNavbarOpen)} sx={{cursor: 'pointer'}}>
                    <img className="profile_picture_menu" src={formData.profile_picture} />
                </a>
                {isNavbarOpen ? <Navbar isNavbarOpen={isNavbarOpen} user={users} setIsNavbarOpen={setIsNavbarOpen}/> : null}
                    <img src={Logo} alt="Logo" className="Logo"/>
            </header>
            <div className="Livro-container">
                <Link className="link-arrow-back" to={"/menu"}>
                    <FiArrowLeft className="ArrowBack-profiledetails"/>
                </Link>
                <div className='livro-col1'>
                    <div className='capa-livro'>
                        <img src={capa} />
                    </div>
                </div>
                <div className='livro-col2'>
                    <h1 className='Titulo'>{livro.name}</h1>
                    <p className='Descricao'>{livro.description}</p>
                </div>
            </div>
            <div className='New-Comentários'>
                <NewComment user={users} livro={livro}/>
            </div>
            <div className='Comentários'>
                    <PageComentarios users={users} messages={filteredMessages} />
            </div>
        </div>
  );
}

export default LivroDetails