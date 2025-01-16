import { useState } from "react";
import { Link } from "react-router-dom";
import { TiHeartOutline } from "react-icons/ti";
import { TiHeartFullOutline } from "react-icons/ti";

const Comentarios = ({ users, messages }) => {
    const userId = localStorage.getItem('currentUserId');
    const [like, setLike] = useState(false);

    const currentUser = users.find(user => user.id === parseInt(userId));
    // Combina os dados de users e messages
    const commentList = messages.map((message) => {
        const user = users.find((user) => user.id === message.user);

        return {
            ...message,
            authorId: user?.id,
            author: user?.name || "Usuário Desconhecido",
            avatar: user?.profile_picture || "avatar.png",
        };
    });

    if (!commentList.length) {
        return <p>Sem comentários disponíveis.</p>;
    }

    const handleLike = () => {
        setLike(prevLike => !prevLike);
    };

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
                            {currentUser.id === comment.authorId ? <button className="button-heart" onClick={handleLike}>{like === true ? <TiHeartFullOutline className="heart" color="#e0245e"/> : <TiHeartOutline className="heart"/>}</button> : null}
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
