import "./Menu.css";
import ListaLivros from "./ListaLivros.js";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react"

const Menu = ({isAuthenticated}) => {
    const navigate = useNavigate();

    useEffect(() => {
        if (!isAuthenticated) {
            navigate('/');
        }
    }, [isAuthenticated, navigate]);

    return (
        <div className="Menu">
            <header className="App-header-menu">
                <h1>Bem vindo</h1>
            </header>
            <div className="App-container">
                <h1>Livros Disponiveis</h1>
                <ListaLivros/>
            </div>
        </div>
    );
}

export default Menu;