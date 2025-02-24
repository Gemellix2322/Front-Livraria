import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../Menu/Navbar";
import Logo from "../../img/Login-Logo.png";
import { Button } from "@mui/material";
import notify from "../../components/NewAlert";

const AddLivro = ({users, authenticated}) => {
    const navigate = useNavigate()

    const userId = localStorage.getItem('currentUserId');

    const currentUser = users.find(user => user.id === parseInt(userId));

    const [formData, setFormData] = useState({
        name: currentUser.name,
        user: currentUser.username,
        password: currentUser.password,
        profile_picture: currentUser.profile_picture,
        admin: currentUser.admin,
    });

    const [isNavbarOpen, setIsNavbarOpen] = useState(false);

    useEffect(() => {
        if(authenticated === false){
            notify('Loge primeiro', 'warning')
            navigate('/')
        } else {
            notify('Logado com sucesso', 'success', 900);
        }
    })

    return (
        <div className="AddLivro">
             <header className="App-header-menu">
                <a onClick={() => setIsNavbarOpen(!isNavbarOpen)} sx={{cursor: 'pointer'}}>
                    <img className="profile_picture_menu" src={formData.profile_picture} />
                </a>
                {isNavbarOpen ? <Navbar isNavbarOpen={isNavbarOpen} user={users} setIsNavbarOpen={setIsNavbarOpen}/> : null}
                <img src={Logo} alt="Logo" className="Logo"/>
                <h1>{formData?.name ? `Bem-vindo ${formData.name}` : 'Bem-vindo'}</h1>
            </header>
            <div className="Container">
                <form>

                    <Button type="submit">Botão</Button>
                </form>
            </div>
        </div>
    )
}

export default AddLivro;