import { ProfileImg } from '@/assets';
import { Box, Button, CardMedia, Typography } from '@mui/material';

const Suggestions = () => {
  const range = 5;

  const numbers = Array.from({ length: range }, (_, i) => i + 1);

  return (
    <Box>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          color: '#ADADAD',
        }}
      >
        <Typography
          variant="h5"
          sx={{ fontSize: '14px', fontWeight: 'bold' }}
          gutterBottom
        >
          Suggestions for you
        </Typography>
        <Button
          sx={{ textTransform: 'none', color: '#ADADAD', fontSize: '12px' }}
        >
          All
        </Button>
      </Box>
      {numbers.map((number, index) => (
        <Box key={index} sx={{ paddingBottom: 1 }}>
          <Box
            sx={{
              display: 'flex',
              width: '100%',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
          >
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <CardMedia
                sx={{ width: '2.7rem', height: '2.7rem', borderRadius: '100%' }}
                image={ProfileImg}
                title="Wdavid"
              />
              <Box paddingX={2} sx={{ textAlign: 'left' }}>
                <Typography
                  variant="h5"
                  sx={{
                    fontSize: '13px',
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
                    fontSize: '11px',
                    color: '#ADADAD',
                    margin: 0,
                    padding: 0,
                  }}
                  gutterBottom
                >
                  Suggested for you
                </Typography>
              </Box>
            </Box>
            <Button
              sx={{
                textTransform: 'none',
                color: '#0095F6',
                fontSize: '13px',
                borderRadius: '50%',
              }}
            >
              Follow
            </Button>
          </Box>
        </Box>
      ))}
    </Box>
  );
};

export default Suggestions;
