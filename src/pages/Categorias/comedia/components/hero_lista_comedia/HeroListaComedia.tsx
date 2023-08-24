import React from 'react';
import { Box } from '@chakra-ui/react';

const HeroListaComedia: React.FC = () => {
  return (
    <>
      <Box
        className="card"
        bg={`url('https://i.pinimg.com/736x/d3/5e/1a/d35e1af9c204089baff491bea2c6a489.jpg')`}
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
          <img  alt="Logo" style={{ width: "160px" }} />
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

export default HeroListaComedia;
