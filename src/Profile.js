import profilepicture from "./img/download.png";
import { FiArrowLeft } from "react-icons/fi";
import { Link } from "react-router-dom";
import "./css/Profile.css"
import { useState } from "react";


const Profile = ({users}) => {
    const [user, setUser] = useState([users]) 
    return (
        <div className="Profile">
            <Link className="link-arrow-back" to={"/menu"}><FiArrowLeft className="ArrowBack"/></Link>
            <div className="picture">
                <img className="profile-picture" src={profilepicture} alt="Foto de Perfil"/>
                <p className="picture-details">Change picture</p>
            </div>
            <div className="profile-details">
            <form className="form-profile">
                <div className="form-row">
                    <label>Nome</label>
                    <input type="text" placeholder={users.name}></input>
                </div>
                <div className="form-row">
                    <label>Senha</label>
                    <input type="password" placeholder={users.password}></input>
                </div>
                <div className="form-row">
                    <button className="Salvar-profile">Salvar</button>
                </div>
            </form>
            </div>
        </div>
    )

}

export default Profile;