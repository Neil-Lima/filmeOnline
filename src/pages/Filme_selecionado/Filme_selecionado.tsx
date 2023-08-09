import React, { useEffect, useState } from 'react';
import { Box, Heading, Image } from '@chakra-ui/react';
import { useParams } from 'react-router-dom';
import useApi from '../../hooks/useApi';
import AtoresFilmeSelecionado from './hero_filme_selecionado/Atores_filme_selecionado';
import { Container } from 'react-bootstrap';
import YouTube from 'react-youtube';

interface Filme {
  id: number;
  titulo: string;
  imagem: string;
  genero: string;
  data: string;
  diretor: string;
  bilheteria: string;
  sinopse: string;
  imagemAtor1: string;
  ator1: string;
  imagemAtor2?: string;
  ator2?: string;
  imagemAtor3?: string;
  ator3?: string;
  imagemAtor4?: string;
  ator4?: string;
  imagemAtor5?: string;
  ator5?: string;
  trailer: string;
}

const FilmeSelecionado: React.FC = () => {
  const { id } = useParams();
  const [filme, setFilme] = useState<Filme | null>(null);
  const { buscarId, detalhesItem } = useApi<Filme>('http://localhost:3333/filmes');

  useEffect(() => {
    buscarId(Number(id)).then(() => {
      setFilme(detalhesItem);
    });
  }, [id, buscarId, detalhesItem]);

  if (!filme) {
    return <div>Carregando...</div>;
  }

  const opts = {
    height: '409',
    width: '727',
    playerVars: {
      autoplay: 1,
    },
  };

  return (
    <>
      <Box className="card" bg={`url('${filme.imagem}')`} backgroundPosition="center" backgroundSize="cover" backgroundRepeat="no-repeat" color="white" padding="100px" minH="100vh">        
        <Container>
          <Box className="row" bg="rgba(33,37,41,0.65)" padding="0px" color="white">
            <Box className="col-md-6 col-lg-6 col-xl-4 col-xxl-4" textAlign="left">
              <Image src={filme.imagem} alt="Imagem Filme" w="100%" h="100%" />
            </Box>
            <Box
              className="col-md-6 col-lg-5 col-xl-6 col-xxl-6"
              color="white"
            >
              <Heading>{filme.titulo}</Heading>
              <p>Data de lançamento: {filme.data}</p>
              <p>Diretor: {filme.diretor}</p>
              <p>Bilheteria: {filme.bilheteria}</p>
              <p>Sinopse: {filme.sinopse}</p>
            </Box>
          </Box>
        </Container>
      </Box>

      <h5 style={{ color: "var(--bs-teal)", textAlign: "left", margin: "25px" }}>ELENCO PRINCIPAL</h5>

      <Container>
        <Box className="row row-cols-5" style={{ marginTop: "50px" }}>
          <AtoresFilmeSelecionado
            imagem={filme.imagemAtor1}
            nome={filme.ator1}
          />
          {filme.imagemAtor2 && filme.ator2 && (
            <AtoresFilmeSelecionado
              imagem={filme.imagemAtor2}
              nome={filme.ator2}
            />
          )}
          {filme.imagemAtor3 && filme.ator3 && (
            <AtoresFilmeSelecionado
              imagem={filme.imagemAtor3}
              nome={filme.ator3}
            />
          )}
          {filme.imagemAtor4 && filme.ator4 && (
            <AtoresFilmeSelecionado
              imagem={filme.imagemAtor4}
              nome={filme.ator4}
            />
          )}
          {filme.imagemAtor5 && filme.ator5 && (
            <AtoresFilmeSelecionado
              imagem={filme.imagemAtor5}
              nome={filme.ator5}
            />
          )}
        </Box>
      </Container>

      <Box mt="4">
        <YouTube videoId={filme.trailer} opts={opts} />
      </Box>
    </>
  );
};

export default FilmeSelecionado;