import "./Menu.css";
import ListaLivros from "./ListaLivros.js";

const Menu = ({}) => {
    return (
        <div className="App">
            <header className="App-header-menu">
                <h1>Bem vindo</h1>
            </header>
            <div className="App-container">
                <h1>Livros Disponiveis</h1>
                <ListaLivros/>
            </div>
        </div>
    )
}

export default Menu;