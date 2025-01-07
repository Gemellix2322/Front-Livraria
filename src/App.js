import "../src/css/App.css"
import {useNavigate, Route, Router, Routes} from "react-router-dom";
import Login from "./Login.js";
import Menu from "./Menu.js";
import Cadastro from "./Cadastro.js";
import Profile from "./Profile.js";
import React, {useState} from 'react';

function App() {


  const [users, setUsers] = useState(() => {
    const savedUsers = localStorage.getItem('users');
    return savedUsers ? JSON.parse(savedUsers) : [{
      user: "gui",
      password: "123",
      username: "guilherme",
    }];
  });
  
  const addUser = (newUser) => {
    const updatedUsers = [...users, newUser];
    setUsers(updatedUsers);
    localStorage.setItem('users', JSON.stringify(updatedUsers));
  };

  return (
      <Routes>
        {/* Tela de Login */}
        <Route path="/" element={<Login users={users}/>} />

        <Route path="/cadastro" element={<Cadastro addUser={addUser}/>}/>

        {/* Rota protegida: só acessível se autenticado */}
        <Route path="/menu" element={<Menu users={users}/>} />

        <Route path="/profile" element={<Profile users={users}/>}/>
      </Routes>
  );
}

export default App;
