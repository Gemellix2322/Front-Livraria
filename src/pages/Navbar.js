import { FiX, FiUser, FiSettings, FiLogOut } from 'react-icons/fi';
import '../css/Navbar.css'

const Navbar = ({ user, isNavbarOpen, setIsNavbarOpen }) => {
    const handleClose = () => {
        setIsNavbarOpen(false);
    };

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
                        <FiUser size={50} />
                        <h3>{user?.username || 'Usuário'}</h3>
                    </div>
                </div>

                <div className="sidebar-content">
                    <ul>
                        <li><FiUser /> Perfil</li>
                        <li><FiSettings /> Configurações</li>
                        <li><FiLogOut /> Sair</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;