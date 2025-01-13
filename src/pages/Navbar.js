import { FiX, FiUser, FiSettings, FiLogOut } from 'react-icons/fi';
import '../css/Navbar.css';
import { useRef, useEffect } from 'react';

const Navbar = ({ user, isNavbarOpen, setIsNavbarOpen }) => {

    // Referências para a sidebar e o overlay
    const sidebarRef = useRef(null);
    const overlayRef = useRef(null);

    const closeSidebar = () => {
        setIsNavbarOpen(false); // Usar a função para alterar o estado
        console.log("Fechou");

        // Manipulação das classes da sidebar e do overlay
        if (sidebarRef.current && overlayRef.current) {
            sidebarRef.current.classList.remove('open');
            sidebarRef.current.classList.add('hidden');
            overlayRef.current.classList.remove('open');
            overlayRef.current.classList.add('hidden');
        }
    };

    const openSidebar = () => {
        console.log("Abriu");

        // Manipulação das classes da sidebar e do overlay
        if (sidebarRef.current && overlayRef.current) {
            sidebarRef.current.classList.remove('hidden');
            sidebarRef.current.classList.add('open');
            overlayRef.current.classList.remove('hidden');
            overlayRef.current.classList.add('open');
        }
    };

    // Usar useEffect para monitorar as mudanças no estado `isNavbarOpen`
    useEffect(() => {
        if (isNavbarOpen) {
            openSidebar(); // Abre a sidebar quando isNavbarOpen é true
        } else {
            closeSidebar(); // Fecha a sidebar quando isNavbarOpen é false
        }
    }, [isNavbarOpen]); // Executa sempre que o estado isNavbarOpen mudar

    return (
        <div className="navbar">
            {/* Overlay para fechar o menu ao clicar fora */}
            <div
                ref={overlayRef}
                className="sidebar-overlay hidden"
                onClick={closeSidebar}
            />
            
            {/* Sidebar */}
            <div ref={sidebarRef} className="sidebar hidden">
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
