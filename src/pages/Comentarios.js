
const Comentarios = () => {
    return (
        <div>
            <div className="comment-avatar">
                <img src="avatar.png" alt="Avatar do usuário"/>
            </div>
            <div className="comment-content">
                <div className="comment-header">
                    <span className="comment-author">Nome do Usuário</span>
                    <span className="comment-date">Data do Comentário</span>
                </div>
                <div className="comment-text">
                    Este é o texto do comentário. Ele pode ser de várias linhas e deve se ajustar ao tamanho da tela.
                </div>
            </div>
     </div>
    )
}

export default Comentarios;