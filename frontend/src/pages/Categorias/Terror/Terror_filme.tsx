// Terror_filme.tsx
import React from 'react';
import ListaFilmesPorGenero from '../../../components/ListaFilmesPorGenero';

const TerrorFilme: React.FC = () => {
  return (
    <div>
      <h1>Filmes de Terror</h1>
      <ListaFilmesPorGenero genero="terror" rotaBase="/terror" quantidadePorPagina={4} />
    </div>
  );
}

export default TerrorFilme;
