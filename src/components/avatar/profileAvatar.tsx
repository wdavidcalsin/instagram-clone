import { ProfileImg } from '@/assets';
import { useStylesItemStories } from '@/styles';
import { CardMedia } from '@mui/material';

interface PropsProfileAvatar {
  stories: boolean;
}

const ProfileAvatar = (props: PropsProfileAvatar) => {
  const classes = useStylesItemStories();

  return (
    <CardMedia
      sx={{
        width: '3.5rem',
        height: '3.5rem',
        borderRadius: '100%',
      }}
      image={ProfileImg}
      title="Wdavid"
      className={props.stories ? classes.image : undefined}
    />
  );
};

export default ProfileAvatar;
