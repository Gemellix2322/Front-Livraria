import { FiX, FiUser, FiSettings, FiLogOut } from 'react-icons/fi';
import '../css/Navbar.css'
import { useState } from 'react';
import { Link } from 'react-router-dom';
import insta from "../img/instagram-logo.svg";

const Navbar = ({ user, isNavbarOpen, setIsNavbarOpen }) => {
    const handleClose = () => {
        setIsNavbarOpen(false);
    };

    const currentUser = user[0];
        
        const [formData, setFormData] = useState({
            name: currentUser.username,
            user: currentUser.name,
            password: currentUser.password,
            profile_picture: currentUser.profile_picture,
        });
    

    return (
        <div className="navbar">
            <div 
                className={`sidebar-overlay ${isNavbarOpen ? 'open' : ''}`}
                onClick={handleClose}
            />
            
            <div className={`sidebar ${isNavbarOpen ? 'open' : ''}`}>
                <button className="close-button" onClick={handleClose}>
                    <FiX />
                </button>

                <div className="sidebar-header">
                    <div className="user-info">
                        <Link to='/profile'>
                            <img src={formData.profile_picture} className='navbar-profile'/>
                        </Link>
                        <h3>{formData?.username || 'Usuário'}</h3>
                    </div>
                </div>

                <div className="sidebar-content">
                    <ul>
                        <Link to='/profile' className='link-icons'>
                            <li className='sidebar-icons'><FiUser /> Perfil</li>
                        </Link>
                        <Link to='/settings' className='link-icons'>
                            <li className='sidebar-icons'><FiSettings /> Configurações</li>
                        </Link>
                        <Link to='/' className='link-icons'>
                            <li className='sidebar-icons'><FiLogOut /> Sair</li>
                        </Link>
                    </ul>

                    <Link to='https://www.instagram.com/gemellicafes/' className='link-insta'>
                        <div className='div-insta'>
                            <img src={insta} className='insta-logo'/>
                            <p>
                                Instagram
                            </p>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Navbar;