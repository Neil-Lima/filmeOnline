import React from 'react';
import { Box, Image, Text } from '@chakra-ui/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilm, faStar } from '@fortawesome/free-solid-svg-icons';
import Logo from './img/logo.png';

const HeroFilme: React.FC = () => {
  return (
    <Box
      className="card"
      bg="url(https://help.nflxext.com/396a2a39-8d34-4260-b07a-6391fe04ded5_what_is_netflix_2_en.png) center / cover no-repeat"
      p="83px"
      textAlign="center"
    >
      <Box className="card-body" color="white" bg="rgba(33,37,41,0.79)">
        <Image src={Logo} w="160px" />
        <Text fontSize="2xl" mt="4">
          <FontAwesomeIcon icon={faFilm} style={{ fontSize: '57.5px' }} />
          &nbsp; STAR MOVIES&nbsp;&nbsp;
          <FontAwesomeIcon icon={faStar} style={{ fontSize: '54.5px' }} />
        </Text>
        <Text fontSize="lg" mt="4">
          Fique por dentro dos melhores filmes.
        </Text>
      </Box>
    </Box>
  );
}

export default HeroFilme;
