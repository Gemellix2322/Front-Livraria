import { useParams } from "react-router-dom";
import Livro from "./Livro";
import "../css/Menu.css"
import { BiColor } from "react-icons/bi";
import { useEffect, useState } from "react";

const Genre = ({ livro }) => {
    const {genre} = useParams();

    const [randomGenre, setRandomGenre] = useState(null);

    const genres = [...new Set(livro.map((l) => l.genre))]
    
    const getRandomGenre = () => {
        const randomIndex = Math.floor(Math.random() * genres.length);
        setRandomGenre(genres[randomIndex]);
    }

    useEffect(() => {
        getRandomGenre();
    }, [livro]);

    return (
        <div className="Genre">
            <header className="App-header-menu">
                <h1>Gêneros</h1>
            </header>
            <div className="App-Container">
                <div className="lista-livros">
                    <h2>{`Livros de ${genre}`}</h2>
                    <ul className="linha-livros">
                    {livro.filter((l) => l.genre === genre).map((l) => (
                            <li key={l.id}>
                                <Livro livro={l}/>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="lista-livros">
                    <h2>Outros Gêneros</h2>
                    <ul className="linha-livros">
                        {randomGenre &&
                            livro.filter((l) => l.genre === randomGenre).map((l) => (
                                    <li key={l.id}>
                                        <Livro livro={l} />
                                    </li>
                                ))}
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Genre;
