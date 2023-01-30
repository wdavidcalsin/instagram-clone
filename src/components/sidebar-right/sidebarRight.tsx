import { Box } from '@mui/material';
import { ItemProfile, Suggestions } from './components';

const SidebarRight = () => {
  return (
    <Box sx={{ width: '35rem', paddingTop: '40px' }}>
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
