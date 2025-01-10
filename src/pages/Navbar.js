// Navbar.js
import { FiX, FiUser, FiSettings, FiLogOut } from 'react-icons/fi';
import '../css/Navbar.css';

const Navbar = ({ user, isNavbarOpen, setIsNavbarOpen }) => {
    const closeSidebar = () => {
        setIsNavbarOpen(false); // Define isNavbarOpen como falso
    };

    return (
        <div className="navbar">
            {/* Overlay para fechar o menu ao clicar fora */}
            {isNavbarOpen && (
                <div
                    className={`sidebar-overlay ${isNavbarOpen ? 'open' : ''}`}
                    onClick={closeSidebar}
                />
            )}

            {/* Sidebar */}
            <div className={`sidebar ${isNavbarOpen ? 'open' : 'hidden'}`}>
                <button className="close-button" onClick={closeSidebar}>
                    <FiX />
                </button>

                {/* Conteúdo do Sidebar */}
                <div className="sidebar-header">
                    <div className="user-info">
                        <FiUser size={50} />
                        <h3>{user?.username || 'Usuário'}</h3>
                    </div>
                </div>

                <div className="sidebar-content">
                    <ul>
                        <li>
                            <FiUser /> Perfil
                        </li>
                        <li>
                            <FiSettings /> Configurações
                        </li>
                        <li>
                            <FiLogOut /> Sair
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
