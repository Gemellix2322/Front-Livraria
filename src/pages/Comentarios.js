const Comentarios = ({ users, messages }) => {
    // Combina os dados de users e messages
    const commentList = messages.map((message) => {
        const user = users.find((user) => user.id === message.user);
        console.log("Mensagem", message.message)

        return {
            ...message,
            author: user?.name || "Usuário Desconhecido",
            avatar: user?.profile_picture || "avatar.png",
        };
    });

    if (!commentList.length) {
        return <p>Sem comentários disponíveis.</p>;
    }

    return (
        <div>
            {commentList.map((comment) => (
                <div key={comment.id} className="comment">
                    <div className="comment-avatar">
                        <img src={comment.avatar} alt={`Avatar de ${comment.author}`} />
                    </div>
                    <div className="comment-content">
                        <div className="comment-header">
                            <span className="comment-author">{comment.author}</span>
                            <span className="comment-date">Data</span>
                        </div>
                        <div className="comment-text">{comment.message}</div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Comentarios;
