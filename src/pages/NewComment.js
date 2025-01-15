const NewComment = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
        //Submit to database
    }


    return (
        <div className="box-input">
            <form onSubmit={handleSubmit} className="new-comment-form">
                <label>Deixe aqui seu comentário</label>
                <textarea placeholder="Digite aqui"></textarea>
                <button type="submit">Enviar</button>
            </form>
        </div>
    )
}

export default NewComment;