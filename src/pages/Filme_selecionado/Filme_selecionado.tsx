import React from 'react';
import { Box, Container, Heading, Image } from '@chakra-ui/react';
import HeroFilme from '../home/components/hero_filme/Hero_filme';
import AtoresFilmeSelecionado from './hero_filme_selecionado/Atores_filme_selecionado';

const FilmeSelecionado: React.FC = () => {
  return (
    <>
      <Box
        className="card"
        bg={`url('colocar_url_da_imagem_capa_aqui')`}
        backgroundPosition="center"
        backgroundSize="cover"
        backgroundRepeat="no-repeat"
        color="white"
        padding="100px"
      >
        <Container>
          <Box
            className="row"
            bg="rgba(33,37,41,0.65)"
            padding="0px"
            color="white"
          >
            <Box
              className="col-md-6 col-lg-6 col-xl-4 col-xxl-4"
              textAlign="left"
            >
              <Image src="colocar_url_da_imagem_aqui" alt="Imagem Filme" w="100%" h="100%" />
            </Box>
            <Box
              className="col-md-6 col-lg-5 col-xl-6 col-xxl-6"
              color="white"
            >
              <Heading>Nome do Filme</Heading>
              <p>Data de lançamento: Data do Lançamento</p>
              <p>Diretor: Nome do Diretor</p>
              <p>Bilheteria: Valor da Bilheteria</p>
              <p>Sinopse: Descrição da Sinopse</p>
            </Box>
          </Box>
        </Container>
      </Box>

      <h5 style={{ color: "var(--bs-teal)", textAlign: "left", margin: "25px" }}>ELENCO PRINCIPAL</h5>

      <Container mb="10px">
        <Box className="row row-cols-5" style={{ marginTop: "50px" }}>
          <AtoresFilmeSelecionado
            imagem="colocar_url_da_imagem_ator_aqui"
            nome="Nome do Ator 1"
          />
          <AtoresFilmeSelecionado
            imagem="colocar_url_da_imagem_ator_aqui"
            nome="Nome do Ator 2"
          />
          {/* Adicionar mais atores */}
        </Box>
      </Container>

      <iframe
        width="727"
        height="409"
        src="https://www.youtube.com/embed/ipbCUW3umJU"
        title="Official Trailer: Freddy vs. Jason (2003)"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
    </>
  );
};

export default FilmeSelecionado;
