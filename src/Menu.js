import "../src/css/Menu.css";
import ListaLivros from "./ListaLivros.js";
import { useNavigate } from "react-router-dom";
import Logo from "../src/img/Logo.png";
import { Link } from "react-router-dom";

const Menu = ({}) => {
    const navigate = useNavigate();
    return (
        <div className="Menu">
            <header className="App-header-menu">
                <Link to={'/profile'}><img src={Logo} alt="Logo" className="Logo"/></Link>
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