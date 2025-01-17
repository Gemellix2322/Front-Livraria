import { FiArrowLeft } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import "../css/Profile.css";
import { useEffect, useState } from "react";
import ImageInput from "../components/ImageInput";
import notify from "../components/NewAlert";
import api from "../components/Api";

const Profile = ({ users, authenticated }) => {
    const navigate = useNavigate();

    const userId = localStorage.getItem('currentUserId');

    const currentUser = users.find(user => user.id === parseInt(userId));

    // Estado para gerenciar os dados do formulário
    const [formData, setFormData] = useState({
        id: currentUser.id,
        username: currentUser.username, // Nome de login
        name: currentUser.name,         // Nome do usuário
        password: currentUser.password, // Senha
        profile_picture: currentUser.profile_picture,
    });

    // Redireciona o usuário caso não esteja autenticado
    useEffect(() => {
        if (!authenticated) {
            notify('Loge primeiro', 'warning');
            navigate('/');
        }
    }, [authenticated, navigate]);

    // Atualiza os campos do formulário dinamicamente
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleRefresh = () => {
        window.location.reload();
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await api.put("/update-users", {
                id: formData.id,
                name: formData.name,
                password: formData.password,
            });

            if (response.status === 200) {
                notify('Alterado com sucesso', 'success');
                setTimeout(() => {handleRefresh()}, 1000);
            } else {
                notify('Erro ao alterar usuário', 'error');
            }
        } catch (error) {
            console.error("Erro completo:", error);
            notify('Erro ao alterar usuário', 'error');
        }
    };

    return (
        <div className="Profile">
            <FiArrowLeft className="ArrowBack" onClick={() => navigate(-1)} />
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
                            id="name"
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="Digite o nome do usuário"
                        />
                    </div>
                    <div className="form-row">
                        <label>Senha</label>
                        <input
                            id="password"
                            type="password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            placeholder="Digite a nova senha"
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
