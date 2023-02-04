import { ProfileImg } from '@/assets';
import { Box, Button, CardMedia, Typography } from '@mui/material';

const ItemProfile = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        width: '100%',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingY: '20px',
      }}
    >
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <CardMedia
          sx={{ width: '4rem', height: '4rem', borderRadius: '100%' }}
          image={ProfileImg}
          title="Wdavid"
        />
        <Box paddingX={2} sx={{ textAlign: 'left' }}>
          <Typography
            variant="h5"
            sx={{
              fontSize: '14px',
              fontWeight: 'bold',
              color: 'secondary.contrastText',
            }}
            gutterBottom
          >
            williandavidcalsin
          </Typography>
          <Typography
            variant="h5"
            sx={{
              fontSize: '14px',
              color: '#ADADAD',
              margin: 0,
              padding: 0,
            }}
            gutterBottom
          >
            willian david calsin
          </Typography>
        </Box>
      </Box>
      <Button
        sx={{
          textTransform: 'none',
          color: '#0095F6',
          fontSize: '12px',
          borderRadius: '50%',
        }}
      >
        Switch
      </Button>
    </Box>
  );
};

export default ItemProfile;
