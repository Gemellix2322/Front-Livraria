import { FiX, FiUser, FiSettings, FiLogOut } from 'react-icons/fi';
import '../css/Navbar.css';
import { useRef, useEffect} from 'react';

const Navbar = ({ user, isNavbarOpen, setIsNavbarOpen}) => {
    useEffect(() => {
        if (isNavbarOpen) {
            console.log("Funciona")
            openSidebar();
        } else {
            closeSidebar();
        }
    }, [isNavbarOpen]);

    const sidebarRef = useRef(null);
    const overlayRef = useRef(null);

    const closeSidebar = () => {
        isNavbarOpen(false)
        // Acessa a referência da sidebar e do overlay para manipular as classes
        if (sidebarRef.current && overlayRef.current) {
            sidebarRef.current.classList.remove('open');
            sidebarRef.current.classList.add('hidden');
            overlayRef.current.classList.remove('open');
            overlayRef.current.classList.add('hidden');
        }
    };

    const openSidebar = () => {
        console.log("Abriu")
        // Acessa a referência da sidebar e do overlay para manipular as classes
        if (sidebarRef.current && overlayRef.current) {
            sidebarRef.current.classList.remove('hidden');
            sidebarRef.current.classList.add('open');
            overlayRef.current.classList.remove('hidden');
            overlayRef.current.classList.add('open');
        }
    };

    

    return (
        <div className="navbar">
            {/* Overlay para fechar o menu ao clicar fora */}
            <div
                className={`sidebar-overlay hidden`} // A classe 'hidden' mantém invisível inicialmente
                onClick={closeSidebar}
            />
            
            {/* Sidebar */}
            <div className="sidebar hidden"> {/* Inicialmente escondida */}
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
