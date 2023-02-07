import { PublicationCards } from '@/components';
import { Stories } from '@/components/stories';
import { Box } from '@mui/material';

const Home = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'right',
        marginX: {
          xs: '0px',
          sm: '20px',
          md: '40px',
          lg: '40px',
        },
      }}
    >
      <Box
        sx={{
          width: {
            xs: '100%',
            sm: '31rem',
            md: '31rem',
            lg: '31rem',
          },
        }}
      >
        <Stories />
        <PublicationCards />
      </Box>
    </Box>
  );
};

export default Home;
