import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Logo from './img/Logo.png'


function LivroDetails({ users, livros }) {
  const { name } = useParams();

  
  
  const livro = livros.find(l => l.name === name);


  if (!livro) {
    return <div>Livro não encontrado</div>;
  }

  const capa = livro.cover_image;

  return (
    <div className="Livro-Details">
            <header className="App-header-menu">
                <Link to={'/profile'}>
                    <img className="profile_picture_menu" style={{backgroundImage: `url(https://imgur.com/66mqgNZ.png)`}}/>
                </Link>
                <Link to={'https://www.instagram.com/gemellicafes/'}>
                    <img src={Logo} alt="Logo" className="Logo"/>
                </Link>
            </header>
            <div className="Livro-container">
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
        </div>
  );
}

export default LivroDetails