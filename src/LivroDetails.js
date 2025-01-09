import { useParams } from 'react-router-dom';

function LivroDetails({ users, livros }) {
  const { name } = useParams();
  
  const livro = livros.find(l => l.name === name);

  if (!livro) {
    return <div>Livro não encontrado</div>;
  }

  return (
    <div>
      <h1>{livro.name}</h1>
    </div>
  );
}

export default LivroDetails