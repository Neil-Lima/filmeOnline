import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import TerrorFilme from '../pages/Categorias/Terror/Terror_filme';
import Home from '../pages/home/Home';
import LayoutFilme from '../shared/Layout_filme/Layout_filme';
import FormCadastroFilme from '../pages/form_cadastro_filme/FormCadastroFilme';
import FilmeSelecionado from '../pages/Filme_selecionado/Filme_selecionado';
import ComediaFilme from '../pages/Categorias/comedia/ComediaFilme';

const Rotas: React.FC = () => {
  return (
    <>
      <BrowserRouter>
        <LayoutFilme>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/terror" element={<TerrorFilme />} />
            <Route path="/comedia" element={<ComediaFilme />} />
            <Route path="/filmeselecionado/:id" element={<FilmeSelecionado />} />
            <Route path="/formcadastro" element={<FormCadastroFilme />} />
          </Routes>
        </LayoutFilme>
      </BrowserRouter>
    </>
  );
}

export default Rotas;
