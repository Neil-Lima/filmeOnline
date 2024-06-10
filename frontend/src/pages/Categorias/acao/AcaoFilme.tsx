import React from 'react';
import HeroSectionMovie from '../../../components/HeroSectionMovie';
import ListaFilmesPorGenero from '../../../components/ListaFilmesPorGenero';

const AcaoFilme: React.FC = () => {
  return (
    <>
      {/* Adicionando o HeroSectionMovie com algumas propriedades */}
      <HeroSectionMovie
        category="Ação"
        description="Confira os melhores filmes de ação"
        imageUrl="https://kanto.legiaodosherois.com.br/w760-h398-cfill/wp-content/uploads/2017/06/legiao_pSrzlfx0te5kudMbDF3n29PyTNVZCRmBcJKq16A8GO.png.webp" // URL da imagem de "Bem-Vindo à Selva"
      /> 
      <ListaFilmesPorGenero genero="acao" rotaBase="/terror" quantidadePorPagina={4} />     
    </>
  );
}

export default AcaoFilme;
