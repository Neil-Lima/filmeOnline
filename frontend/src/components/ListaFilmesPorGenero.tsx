import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Container, Flex, Box, Image, Heading, Button, Grid } from '@chakra-ui/react';
import { useQuery } from 'react-query';
import axios from 'axios';

interface Filme {
  id: number;
  titulo: string;
  imagem: string;
  genero: string;
}

interface ListaFilmesPorGeneroProps {
  genero: string; 
  rotaBase: string;
  quantidadePorPagina: number;
}

const ListaFilmesPorGenero: React.FC<ListaFilmesPorGeneroProps> = ({ genero, rotaBase, quantidadePorPagina }) => {
  const { data, isLoading, isError } = useQuery<Filme[]>(['filmes', genero], async () => {
    const response = await axios.get<Filme[]>(`http://localhost:3001/filmes?genero=${genero}`);
    return response.data;
  });

  const [paginaAtual, setPaginaAtual] = useState(1);

  if (isLoading) return <div>Carregando...</div>;
  if (isError) return <div>Ocorreu um erro ao carregar os filmes</div>;

  if (!data) return null;

  const totalPaginas = Math.ceil(data.length / quantidadePorPagina);
  const indiceInicial = (paginaAtual - 1) * quantidadePorPagina;
  const filmesPaginados = data.slice(indiceInicial, indiceInicial + quantidadePorPagina);

  const paginaAnterior = () => {
    setPaginaAtual(paginaAtual - 1);
  };

  const proximaPagina = () => {
    setPaginaAtual(paginaAtual + 1);
  };

  return (
    <Container mb="10px" maxW="100%">
      <Flex direction="column" align="center" mt="50px">
        <Grid templateColumns="repeat(4, 1fr)" gap={4}>
          {filmesPaginados.map((filme) => (
            <Box key={filme.id} textAlign="center" mb="20px">
              <Link to={`/filmeselecionado/${filme.id}`}> {/* Modificado para redirecionar para a rota do filme selecionado */}
                <Image src={filme.imagem} w="250px" h="250px" border="1px solid teal" alt={`Imagem ${filme.titulo}`} />
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
          <span>{paginaAtual} de {totalPaginas}</span>
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

export default ListaFilmesPorGenero;
