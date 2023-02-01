import { carouselConfigurations } from '@/setting';
import { Box } from '@mui/material';
import Carousel from 'react-material-ui-carousel';
import ItemStories from './ItemStories';

const Stories = () => {
  const range = 6;

  const numbers = Array.from({ length: range }, (_, i) => i + 1);

  return (
    <Box sx={{ textAlign: 'left', width: '100%', marginBottom: '40px' }}>
      <Carousel
        {...carouselConfigurations}
        navButtonsProps={{
          style: {
            color: 'black',
            background: 'white',
            padding: 0,
            margin: 0,
            width: '100%',
          },
        }}
      >
        {numbers.map((number, index) => {
          const numbersTwo = Array.from({ length: 6 }, (_, i) => i + 1);
          return (
            <Box
              key={index}
              sx={{
                display: 'flex',
                justifyContent: 'space-between',
                overflow: 'hidden',
                width: 'auto',
              }}
            >
              {numbersTwo.map((number, index) => (
                <ItemStories key={index} />
              ))}
            </Box>
          );
        })}
      </Carousel>
    </Box>
  );
};

export default Stories;
