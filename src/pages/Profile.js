import { FiArrowLeft } from "react-icons/fi";
import { Link } from "react-router-dom";
import "../css/Profile.css";
import { useState } from "react";
import ImageInput from "../components/ImageInput";

const Profile = ({users}) => {
    const userId = localStorage.getItem('currentUserId');

    const currentUser = users.find(user => user.id === parseInt(userId));
    
    const [formData, setFormData] = useState({
        name: currentUser.username,
        user: currentUser.name,
        password: currentUser.password,
        profile_picture: currentUser.profile_picture,
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Aqui você terá acesso à imagem através de formData.avatar
        console.log("Dados atualizados:", formData);
    };

    return (
        <div className="Profile">
            <Link className="link-arrow-back" to={"/menu"}>
                <FiArrowLeft className="ArrowBack"/>
            </Link>
            <div className="picture">
                <ImageInput
                    className="profile-picture-input"
                    name="avatar"
                    maxHeight={200}
                    defaultImg={formData.profile_picture}
                />
                <div className="picture-icon"><p>+</p></div>
            </div>
            <div className="profile-details">
                <form className="form-profile" onSubmit={handleSubmit}>
                    <div className="form-row">
                        <label>Nome</label>
                        <input 
                            type="text" 
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder={currentUser.user}
                        />
                    </div>
                    <div className="form-row">
                        <label>Senha</label>
                        <input 
                            type="password" 
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            placeholder={currentUser.password}
                        />
                    </div>
                    <div className="form-row">
                        <button type="submit" className="Salvar-profile">
                            Salvar
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Profile;