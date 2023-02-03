import { Box } from '@mui/material';
import { ItemProfile, Suggestions } from './components';

const SidebarRight = () => {
  return (
    <Box
      sx={{
        width: {
          xs: '80px',
          sm: '100%',
          md: '25rem',
          lg: '35rem',
        },
        display: {
          xs: 'none',
          sm: 'none',
          md: 'block',
          lg: 'block',
        },
        paddingTop: '30px',
        bgcolor: 'primary.main',
      }}
    >
      <Box
        sx={{
          width: {
            xs: '100%',
            sm: '60%',
            md: '60%',
            lg: '60%',
          },
        }}
      >
        <ItemProfile />
        <Suggestions />
      </Box>
    </Box>
  );
};

export default SidebarRight;
