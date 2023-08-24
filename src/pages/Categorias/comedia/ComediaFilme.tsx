import React from 'react';
import ListaComediaFilmes from './components/Lista_comedia_filmes/ListaComediaFilmes';
import HeroListaComedia from './components/hero_lista_comedia/HeroListaComedia';
const ComediaFilme: React.FC = () => {
  return (
    <>
      <HeroListaComedia />
      <ListaComediaFilmes />
    </>
  );
};

export default ComediaFilme;