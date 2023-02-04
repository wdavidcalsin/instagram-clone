import { Button, Typography } from '@mui/material';
import { ProfileAvatar } from '../avatar';

const ItemStories = () => {
  return (
    <Button
      sx={{
        marginX: '5px',
        marginY: '5px',
        flexDirection: 'column',
        justifyContent: 'center',
        padding: '0',
      }}
    >
      <ProfileAvatar stories={true} />
      <Typography
        variant="h5"
        sx={{
          fontSize: '12px',
          color: 'secondary.contrastText',
          textTransform: 'lowercase',
          marginTop: '7px',
        }}
        gutterBottom
      >
        wdavid
      </Typography>
    </Button>
  );
};

export default ItemStories;
