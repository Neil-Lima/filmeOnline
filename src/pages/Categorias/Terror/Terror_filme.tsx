import React from 'react';
import Hero_lista_terror from './components/hero_lista_terror/Hero_lista_terror';
import Lista_terror_filmes from './components/Lista_terror_filmes/Lista_terror_filmes';


const TerrorFilme: React.FC = () => {
  return (
    <>
      <Hero_lista_terror />
      <Lista_terror_filmes />
    </>
  );
};

export default TerrorFilme;