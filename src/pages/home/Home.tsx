import React from 'react';
import CategoriasFilme from './components/categorias_filme/Categorias_filme';
import HeroFilme from './components/hero_filme/Hero_filme';
import PatrocinadoresFilme from './components/patrocinadores_filme/Patrocinadores_filme';

const Home: React.FC = () => {
  return (
    <>
      <HeroFilme />
      <PatrocinadoresFilme />
      <CategoriasFilme />
    </>
  );
}

export default Home;
