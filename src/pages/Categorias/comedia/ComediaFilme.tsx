import React from 'react';
import ListaComediaFilmes from './components/Lista_comedia_filmes/ListaComediaFilmes';
import HeroListaComedia from './components/hero_lista_comedia/HeroListaComedia';
import { Container } from 'react-bootstrap';
const ComediaFilme: React.FC = () => {
  return (
    <>
      <HeroListaComedia />
      <Container>
      <ListaComediaFilmes />
    </Container>
    </>
  );
};

export default ComediaFilme;