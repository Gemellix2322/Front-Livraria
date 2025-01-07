import "../src/css/App.css"
import {useNavigate, Route, Router, Routes} from "react-router-dom";
import Login from "./Login.js";
import Menu from "./Menu.js";
import Cadastro from "./Cadastro.js";
import Profile from "./Profile.js";
import React, {useState} from 'react';

function App() {


  const [users, setUsers] = useState([{
    user: "gui",
    password: "123",
  }]);

  const addUser = (user) => {
    setUsers((prevUsers) => [...prevUsers, user]);
    console.log("Usuários Cadastrados: ", [...users, user]);
  }

  return (
      <Routes>
        {/* Tela de Login */}
        <Route path="/" element={<Login users={users}/>} />

        <Route path="/cadastro" element={<Cadastro addUser={addUser}/>}/>

        {/* Rota protegida: só acessível se autenticado */}
        <Route path="/menu" element={<Menu/>} />

        <Route path="/profile" element={<Profile users={users}/>}/>
      </Routes>
  );
}

export default App;
