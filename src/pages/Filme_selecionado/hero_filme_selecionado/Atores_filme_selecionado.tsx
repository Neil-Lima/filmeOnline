import React from 'react';
import { Box, Image, Heading } from '@chakra-ui/react';

interface AtoresFilmeSelecionadoProps {
  imagem: string;
  nome: string;
}

const AtoresFilmeSelecionado: React.FC<AtoresFilmeSelecionadoProps> = ({ imagem, nome }) => {
  return (
    <Box textAlign="center" marginRight="0px">
      <Image src={imagem} alt={nome} w="100%" h="200px" borderWidth="1px" borderColor="teal" />
      <Heading as="h5" color="white" mt="2">
        {nome}
      </Heading>
    </Box>
  );
}

export default AtoresFilmeSelecionado;
