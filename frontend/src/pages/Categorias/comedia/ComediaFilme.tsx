// ComediaFilme.tsx
import React from 'react';
import ListaFilmesPorGenero from '../../../components/ListaFilmesPorGenero';

const ComediaFilme: React.FC = () => {
  return (
    <div>
      <h1>Filmes de Comédia</h1>
      <ListaFilmesPorGenero genero="comedia" rotaBase="/comedia" quantidadePorPagina={4} />
    </div>
  );
}

export default ComediaFilme;
