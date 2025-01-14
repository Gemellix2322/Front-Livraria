import "../css/App.css"
import {useNavigate, Route, Router, Routes} from "react-router-dom";
import Login from "./Login.js";
import Menu from "./Menu.js";
import Cadastro from "./Cadastro.js";
import Profile from "./Profile.js";
import React, {useEffect, useState} from 'react';
import api from "../components/Api.js";
import { ToastContainer } from "react-toastify";
import LivroDetails from "./LivroDetails.js";
import notify from "../components/NewAlert.js";
import 'react-toastify/dist/ReactToastify.css';
import Genre from "./Genre.js";

function App() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [livro, setLivros] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    console.log('Fazendo requisição para:', `${process.env.REACT_APP_API_URL}/users`);
    api.get('/users')
      .then(response => {
        setUsers(response.data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Erro ao buscar usuários:', error);
        setLoading(false);
      });

    notify('Logado com sucesso', 'success', 900);
    console.log('Fazendo requisição para:', `${process.env.REACT_APP_API_URL}/books`);
    api.get('/books')
      .then(response => {
        setLivros(response.data);
        setLoading(false);
      })
      .catch(error => {
        notify('Erro ao buscar livros:', 'error');
        setError(error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>Carregando...</div>;
  }

  return (
    <div>
      <ToastContainer />
      <Routes>
        <Route path="/" element={<Login users={users} />} />
        <Route path="/cadastro" element={<Cadastro users={users} />} />
        <Route path="/menu" element={<Menu users={users} />} />
        <Route path="/profile" element={<Profile users={users} />} />
        <Route path={`/livrodetails/:name`} element={<LivroDetails users={users} livros={livro} />} />
        <Route path={`/genre/:genre`} element={<Genre genre={livro.genre} livro={livro}/>}/>
      </Routes>
    </div>
  );
}

export default App;

