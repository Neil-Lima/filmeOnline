import React from 'react';
import { Box, Button, FormControl, FormLabel, Input, Textarea, Flex, Heading } from '@chakra-ui/react';

const FormCadastroFilme: React.FC = () => {
  return (
    <Box className="container">
      <form>
        <Flex direction="column">
          <FormControl>
            <FormLabel>Título</FormLabel>
            <Input type="text" />
          </FormControl>
          <FormControl>
            <FormLabel>Gênero</FormLabel>
            <Input type="text" />
          </FormControl>
          <FormControl>
            <FormLabel>Imagem</FormLabel>
            <Input type="text" />
          </FormControl>
          <FormControl>
            <FormLabel>Data</FormLabel>
            <Input type="text" />
          </FormControl>
          <FormControl>
            <FormLabel>Diretor</FormLabel>
            <Input type="text" />
          </FormControl>
          <FormControl>
            <FormLabel>Capa</FormLabel>
            <Input type="text" />
          </FormControl>
          <FormControl>
            <FormLabel>Bilheteria</FormLabel>
            <Input type="text" />
          </FormControl>
          {/* Rest of the form controls... */}
          <Button colorScheme="green">
            Enviar
          </Button>
        </Flex>
      </form>
    </Box>
  );
}

export default FormCadastroFilme;
