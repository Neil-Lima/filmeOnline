import React from 'react';
import { Box, Image, Heading } from '@chakra-ui/react';

interface AtoresFilmeSelecionadoProps {
  imagem: string;
  nome: string;
}

const AtoresFilmeSelecionado: React.FC<AtoresFilmeSelecionadoProps> = ({ imagem, nome }) => {
  return (
    <Box
      style={{ border: "1px solid teal", borderRadius: "8px" }}
      textAlign="center"
      marginRight="3px"
      p="10px"
      maxW="150px"
    >
      <Image src={imagem} alt={nome} w="100%" h="150px" mx="auto" my="2" />
      <Heading as="h3" color="white" fontSize="15px" mt="2">
        {nome}
      </Heading>
    </Box>
  );
}

export default AtoresFilmeSelecionado;