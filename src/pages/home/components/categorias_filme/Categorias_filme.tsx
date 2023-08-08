import React from 'react';
import { Link } from 'react-router-dom';
import { Box, Container, Grid, Heading } from '@chakra-ui/react';

interface Categoria {
  nome: string;
  rota: string;
  imagem: string;
}

const categorias: Categoria[] = [
  {
    nome: 'Terror',
    rota: '/terror',
    imagem:
      'https://cinepop.com.br/wp-content/uploads/2020/04/freddy-vs-jason.jpg',
  },
  {
    nome: 'Aventura',
    rota: '/aventura',
    imagem: 'https://images.alphacoders.com/615/615287.jpg',
  },
  {
    nome: 'Comédia',
    rota: '/comedia',
    imagem:
      'https://i.pinimg.com/736x/d3/5e/1a/d35e1af9c204089baff491bea2c6a489.jpg',
  },
  {
    nome: 'Ficção',
    rota: '/ficcao',
    imagem:
      'https://e0.pxfuel.com/wallpapers/36/536/desktop-wallpaper-predador-alienigena-ficcao-filme-acao.jpg',
  },
  {
    nome: 'Romance',
    rota: '/romance',
    imagem: 'https://images2.alphacoders.com/616/616490.jpg',
  },
  {
    nome: 'Ação',
    rota: '/acao',
    imagem:
      'https://c4.wallpaperflare.com/wallpaper/990/576/901/weapons-figure-helicopters-art-wallpaper-preview.jpg',
  },
  {
    nome: 'Drama',
    rota: '/drama',
    imagem:
      'https://blog.pajaris.com.br/wp-content/uploads/2020/12/Milagre-na-Cela-7.jpeg',
  },
  {
    nome: 'Luta',
    rota: '/luta',
    imagem:
      'https://www.engeplus.com.br/cache/noticia/0113/0113647/creed-nascido-para-lutar-o-filme-de-luta-perfeito.jpg?t=20170914161824',
  },
  {
    nome: 'Faroeste',
    rota: '/faroeste',
    imagem:
      'https://www.cinemarden.com.br/wp-content/uploads/2012/02/168-Tr-C3-AAs-Homens-em-Conflito.jpg',
  },
];

const CategoriasFilme: React.FC = () => {
  return (
    <Box>
    <Heading textAlign="center" color="white">
      Fique à vontade para escolher a categoria de filme de sua preferência.
    </Heading>
    <Container maxW="container.xl" mt="4">
      <Grid templateColumns="repeat(3, 1fr)" gap="4">
        {categorias.map((categoria) => (
          <Box key={categoria.nome} p="4"> {/* Aumentei o padding aqui */}
            <Link to={categoria.rota}>
              <Box
                bg={`url(${categoria.imagem})`}
                backgroundPosition="center"
                backgroundSize="cover"
                backgroundRepeat="no-repeat"
                p="6"
                textAlign="center"
                color="white"
                _hover={{ opacity: 0.8 }}
              >
                <Box
                  bg="rgba(33, 37, 41, 0.61)"
                  borderRadius="md"
                  p="2"
                >
                  <Heading as="h4" size="md">
                    {categoria.nome}
                  </Heading>
                </Box>
              </Box>
            </Link>
          </Box>
        ))}
      </Grid>
    </Container>
  </Box>
  );
};

export default CategoriasFilme;
