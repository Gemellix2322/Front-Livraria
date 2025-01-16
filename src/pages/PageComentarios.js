import { useEffect, useState } from "react";
import Comentarios from "./Comentarios";
import api from "../components/Api";

const PageComentarios = ({users, messages}) => {

    return (
        <div className="Comment">
            <Comentarios users={users} messages={messages} />
        </div>
    );
};

export default PageComentarios;
