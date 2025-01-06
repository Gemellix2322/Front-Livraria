import profilepicture from "./img/download.png";
import { FiArrowLeft } from "react-icons/fi";
import { Link } from "react-router-dom";
import "./css/Profile.css"


const Profile = () => {
    return (
        <div className="Profile">
            <Link className="link-arrow-back" to={"/menu"}><FiArrowLeft className="ArrowBack"/></Link>
            <div className="picture">
                <img className="profile-picture" src={profilepicture} alt="Foto de Perfil"/>
                <h4 className="picture-details">Change picture</h4>
            </div>
            <div className="profile-details">
                
            </div>
        </div>
    )

}

export default Profile;