import { ProfileImg } from '@/assets';
import { useStylesItemStories } from '@/styles';
import { Button, CardMedia, Typography } from '@mui/material';

const ItemStories = () => {
  const classes = useStylesItemStories();

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
      <CardMedia
        sx={{
          width: '3.5rem',
          height: '3.5rem',
          borderRadius: '100%',
        }}
        image={ProfileImg}
        title="Wdavid"
        className={classes.image}
      />
      <Typography
        variant="h5"
        sx={{
          fontSize: '12px',
          color: 'rgba(0, 0, 0, 0.87)',
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
