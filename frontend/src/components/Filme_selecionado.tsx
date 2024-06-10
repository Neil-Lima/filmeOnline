import React from 'react';
import { Box, Heading, Image, Text } from '@chakra-ui/react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import axios from 'axios';

interface Filme {
  id: number;
  titulo: string;
  imagem: string;
  genero: string;
  data: string;
  diretor: string;
  bilheteria: string;
  sinopse: string;
  atores: { nome: string; imagem: string }[];
  trailer: string;
}

const FilmeSelecionado: React.FC = () => {
  const { id } = useParams();
  
  const { data: filme, isLoading, isError } = useQuery<Filme>(['filme', id], async () => {
    const response = await axios.get<Filme>(`http://localhost:3333/filmes/${id}`);
    return response.data;
  }, {
    enabled: !!id,
  });

  if (isLoading) return <div>Carregando...</div>;
  if (isError) return <div>Ocorreu um erro ao carregar o filme</div>;

  if (!filme) {
    return <div>Filme não encontrado</div>;
  }

  return (
    <>
      <Box className="card" bg={`url('${filme.imagem}')`} backgroundPosition="center" backgroundSize="cover" backgroundRepeat="no-repeat" color="white" padding="100px" minH="100vh">        
        <Box className="row" bg="rgba(33,37,41,0.65)" padding="0px" color="white" fontSize="20px">
          <Box className="col-md-6 col-lg-6 col-xl-4 col-xxl-4" textAlign="left">
            <Image src={filme.imagem} alt="Imagem Filme" w="100%" h="100%" />
          </Box>
          <Box className="col-md-6 col-lg-5 col-xl-6 col-xxl-6" color="white">
            <Heading>{filme.titulo}</Heading>
            <p>Data de lançamento: {filme.data}</p>
            <p>Diretor: {filme.diretor}</p>
            <p>Bilheteria: {filme.bilheteria}</p>
            <p>Sinopse: {filme.sinopse}</p>
            <Text>Atores:</Text>
            <Box display="flex" alignItems="center">
              {filme.atores.map((ator, index) => (
                <Box key={index} mr="20px">
                  <Image src={ator.imagem} alt={ator.nome} w="110px" h="150px" border="2px solid green" borderRadius="md" />
                  <Text>{ator.nome}</Text>
                </Box>
              ))}
            </Box>
          </Box>
        </Box>
      </Box>

      <Box mt="8" textAlign="center">
        <Heading as="h2" color="white">Trailer</Heading>
        <Box mt="4" mx="auto">
          <iframe
            width="727"
            height="409"
            src={`https://www.youtube.com/embed/${filme.trailer}`}
            title="Trailer do Filme"
            frameBorder="0"
            allowFullScreen
          ></iframe>
        </Box>
      </Box>
    </>
  );
};

export default FilmeSelecionado;
