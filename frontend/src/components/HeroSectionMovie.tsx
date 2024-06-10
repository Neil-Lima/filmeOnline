import React from 'react';
import { Box } from '@chakra-ui/react';

interface HeroSectionMovieProps {
  category: string;
  description: string;
  imageUrl: string;
}

const HeroSectionMovie: React.FC<HeroSectionMovieProps> = ({ category, description, imageUrl }) => {
  return (
    <Box
      className="card"
      bg={`url('${imageUrl}')`}
      backgroundPosition="center"
      backgroundSize="cover"
      backgroundRepeat="no-repeat"
      padding="150px"
      textAlign="center"
    >
      <Box
        className="card-body"
        color="white"
        bg="rgba(33,37,41,0.79)"
        padding="18px"
      >
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <h1>
            <i className="far fa-star"></i>{category}
          </h1>
          <h4 color="var(--bs-orange)">
            {description}
          </h4>
        </div>
      </Box>
    </Box>
  );
};

export default HeroSectionMovie;
