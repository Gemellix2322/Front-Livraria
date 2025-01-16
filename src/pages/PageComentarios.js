import { useEffect, useState } from "react";
import Comentarios from "./Comentarios";
import api from "../components/Api";

const PageComentarios = () => {
    const [users, setUsers] = useState([]);
    const [messages, setMessages] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                // Carregando as mensagens
                const [messagesResponse, usersResponse] = await Promise.all([
                    api.get('/messages'),
                    api.get('/users')
                ]);

                setMessages(messagesResponse.data);
                setUsers(usersResponse.data);
            } catch (error) {
                console.error('Erro ao buscar dados:', error);
                setError('Erro ao carregar dados.');
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    if (loading) return <p>Carregando...</p>;
    if (error) return <p>{error}</p>;

    return (
        <div className="Comment">
            <Comentarios users={users} messages={messages} />
        </div>
    );
};

export default PageComentarios;
