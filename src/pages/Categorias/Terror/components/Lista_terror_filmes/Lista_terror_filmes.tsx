import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Flex, Box, Image, Heading, Button, Grid } from '@chakra-ui/react';
import useApi from '../../../../../hooks/useApi';

interface Filme {
  id: number;
  titulo: string;
  imagem: string;
  genero: string; 
}

const ListaTerrorFilmes: React.FC = () => {
  const { dados, carregando, erro, paginaAtual, totalPaginas, paginar } = useApi<Filme>('http://localhost:3333/filmes', 6);


  // Filtrar os filmes que possuem o gênero "Terror"
  const filmesDeTerror = dados.filter((filme) => filme.genero === 'Terror');

  const paginaAnterior = () => {
    paginar(paginaAtual - 1);
  };

  const proximaPagina = () => {
    paginar(paginaAtual + 1);
  };

  const paginaSelecionada = (numeroPagina: number) => {
    paginar(numeroPagina);
  };

  return (
    <Container mb="10px" maxW="100%">
      <Flex direction="column" align="center" mt="50px">
        <Grid templateColumns="repeat(4, 1fr)" gap={4}>
          {filmesDeTerror.map((filme) => (
            <Box key={filme.id} textAlign="center" mb="20px">
              <Link to={`/filmeselecionado/${filme.id}`}>
                <Image src={filme.imagem} w="100%" border="1px solid teal" alt={`Imagem ${filme.titulo}`} />
                <Heading color="white" size="md" mt="1">
                  {filme.titulo}
                </Heading>
              </Link>
            </Box>
          ))}
        </Grid>
        <Flex mt="20px" justifyContent="center">
          <Button
            onClick={paginaAnterior}
            disabled={paginaAtual === 1}
            mr="10px"
            colorScheme="teal"
          >
            Anterior
          </Button>
          {Array.from({ length: totalPaginas }, (_, index) => (
            <Button
              key={index + 1}
              onClick={() => paginaSelecionada(index + 1)}
              colorScheme={paginaAtual === index + 1 ? "teal" : undefined}
            >
              {index + 1}
            </Button>
          ))}
          <Button
            onClick={proximaPagina}
            disabled={paginaAtual === totalPaginas}
            ml="10px"
            colorScheme="teal"
          >
            Próxima
          </Button>
        </Flex>
      </Flex>
    </Container>
  );
}

export default ListaTerrorFilmes;