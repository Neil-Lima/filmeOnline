import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Flex, Box, Image, Heading } from '@chakra-ui/react';

const ListaTerrorFilmes: React.FC = () => {
  return (
    <Container mb="10px">
      <Flex direction="column" align="center" mt="50px">
        <Flex flexWrap="wrap" justifyContent="center">
          <Box textAlign="center" marginRight="20px" mb="20px">
            <Link to={`/filmeselecionado/1`}>
              <Image src="imagem1.jpg" w="100%" border="1px solid teal" alt="Imagem Filme 1" />
              <Heading color="white" size="md" mt="1">
                Filme 1
              </Heading>
            </Link>
          </Box>
          <Box textAlign="center" marginRight="20px" mb="20px">
            <Link to={`/filmeselecionado/2`}>
              <Image src="imagem2.jpg" w="100%" border="1px solid teal" alt="Imagem Filme 2" />
              <Heading color="white" size="md" mt="1">
                Filme 2
              </Heading>
            </Link>
          </Box>
          {/* Adicionar mais blocos Box semelhantes para cada filme */}
        </Flex>
      </Flex>
    </Container>
  );
}

export default ListaTerrorFilmes;
