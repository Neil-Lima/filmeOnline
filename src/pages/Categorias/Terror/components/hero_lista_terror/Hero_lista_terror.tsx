import React from 'react';
import { Box } from '@chakra-ui/react';
import Logo from './img/logo.png';

const HeroListaTerror: React.FC = () => {
  return (
    <>
      <Box
        className="card"
        bg={`url('https://cinepop.com.br/wp-content/uploads/2020/04/freddy-vs-jason.jpg')`}
        backgroundPosition="center"
        backgroundSize="cover"
        backgroundRepeat="no-repeat"
        padding="83px"
        textAlign="center"
      >
        <Box
          className="card-body"
          color="white"
          bg="rgba(33,37,41,0.79)"
          padding="18px"
        >
          <img src={Logo} alt="Logo" style={{ width: "160px" }} />
          <h1>
            <i className="far fa-star"></i>Terror
          </h1>
          <h4 color="var(--bs-orange)">
            Confira os melhores filmes de terror
          </h4>
        </Box>
      </Box>
    </>
  );
};

export default HeroListaTerror;
