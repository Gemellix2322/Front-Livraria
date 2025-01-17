import notify from "../components/NewAlert";
import api from "../components/Api";
import { useNavigate} from "react-router-dom";
import { useState } from "react";

const NewComment = ({user, livro}) => {
    const [message, setMessage] = useState("");
    const userId = localStorage.getItem('currentUserId');

    const navigate = useNavigate();

    const handleRefresh = () => {
        window.location.reload();
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(livro.id)
    
        try {
            console.log('Iniciando requisição para:', api.defaults.baseURL);
            const response = await api.post("/new-messages", {
                message: message,
                user: userId,
                book: livro.id,
            });
    
            if (response.status === 200) {

                notify('Postado com sucesso', 'success');
                setTimeout(() => {
                    handleRefresh();
                }, 500);
                console.log("ID do Livro", livro.id)
            } else {
                notify('Erro ao cadastrar mensagem', 'error');
            }
        } catch (error) {
            console.error("Erro completo:", error);
            console.error("URL da requisição:", error.config?.url);
            console.error("Método da requisição:", error.config?.method);
            notify('Erro ao cadastrar mensagem', 'error');
        }
    };


    return (
        <div className="box-input">
            <form onSubmit={handleSubmit} className="new-comment-form">
                <label>Deixe aqui seu comentário</label>
                <textarea id="message" value={message} onChange={(e) => setMessage(e.target.value)} placeholder="Digite aqui"></textarea>
                <button type="submit">Enviar</button>
            </form>
        </div>
    )
}

export default NewComment;