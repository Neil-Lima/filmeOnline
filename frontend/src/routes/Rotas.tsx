import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import TerrorFilme from '../pages/Categorias/Terror/Terror_filme';
import Home from '../pages/home/Home';
import LayoutFilme from '../shared/Layout_filme/Layout_filme';
import FormCadastroFilme from '../components/FormCadastroFilme';
import FilmeSelecionado from '../components/Filme_selecionado';
import ComediaFilme from '../pages/Categorias/comedia/ComediaFilme';
import AventuraFilme from '../pages/Categorias/aventura/AventuraFilme';
import FiccaoFilme from '../pages/Categorias/ficcao/FiccaoFilme';
import RomanceFilme from '../pages/Categorias/Romance/RomanceFilme';
import AcaoFilme from '../pages/Categorias/acao/AcaoFilme';
import DramaFilme from '../pages/Categorias/drama/DramaFilme';
import LutaFilme from '../pages/Categorias/luta/LutaFilme';
import FaroesteFilme from '../pages/Categorias/faroeste/FaroesteFilme';

const Rotas: React.FC = () => {
  return (
    <>
      <BrowserRouter>
        <LayoutFilme>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/terror" element={<TerrorFilme />} />
            <Route path="/comedia" element={<ComediaFilme />} />
            <Route path="/aventura" element={<AventuraFilme />} />            
            <Route path="/ficcao" element={<FiccaoFilme />} />
            <Route path="/romance" element={<RomanceFilme />} />
            <Route path="/acao" element={<AcaoFilme />} />
            <Route path="/drama" element={<DramaFilme />} />
            <Route path="/luta" element={<LutaFilme />} />
            <Route path="/faroeste" element={<FaroesteFilme />} />
            <Route path="/filmeselecionado/:id" element={<FilmeSelecionado />} />
            <Route path="/formcadastro" element={<FormCadastroFilme />} />
          </Routes>
        </LayoutFilme>
      </BrowserRouter>
    </>
  );
}

export default Rotas;
