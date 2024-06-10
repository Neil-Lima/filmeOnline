import React from 'react';
import {
  Box,
  Container,
  Flex,
  Heading,
} from '@chakra-ui/react';

import NetflixLogo from './img/Netflix_logo.svg.png';
import DisneyLogo from './img/qfFFFhnM8LwZnjpTECN3oB-1200-80.jpg';
import HboLogo from './img/hbo-max-26mai2021.jpg';
import StarLogo from './img/share-default.d72cf588f6d06cba22171f5ae44289d3.png';
import PrimeVideoLogo from './img/primevideo-seo-logo.png';
import GloboPlayLogo from './img/home-share-e7d30f4.png';

interface Patrocinador {
  nome: string;
  logo: string;
}

const patrocinadores: Patrocinador[] = [
  { nome: 'Netflix', logo: NetflixLogo },
  { nome: 'Disney', logo: DisneyLogo },
  { nome: 'HBO', logo: HboLogo },
  { nome: 'Star', logo: StarLogo },
  { nome: 'Prime Video', logo: PrimeVideoLogo },
  { nome: 'Globo Play', logo: GloboPlayLogo },
];

const PatrocinadoresFilme: React.FC = () => {
  return (
    <Box>
      <Container maxW="container.xl" mt="4">
        <Heading textAlign="center" color="white" mt="22px">
          Nossos patrocinadores:
        </Heading>
        <Flex justifyContent="center" flexWrap="wrap" mt="12px" mb="52px">
          {patrocinadores.map((patrocinador) => (
            <Box key={patrocinador.nome} p="2" flexBasis="16.666%">
              <img
                src={patrocinador.logo}
                style={{ width: '100%', height: 'auto' }}
                alt={`${patrocinador.nome} Logo`}
              />
            </Box>
          ))}
        </Flex>
      </Container>
    </Box>
  );
};

export default PatrocinadoresFilme;
