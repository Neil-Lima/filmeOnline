// DramaFilme.tsx
import React from 'react';
import ListaFilmesPorGenero from '../../../components/ListaFilmesPorGenero';

const DramaFilme: React.FC = () => {
  return (
    <div>
      <h1>Filmes de Drama</h1>
      <ListaFilmesPorGenero genero="drama" rotaBase="/drama" quantidadePorPagina={3} />
    </div>
  );
}

export default DramaFilme;
