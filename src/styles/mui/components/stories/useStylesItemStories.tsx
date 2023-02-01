import { makeStyles } from '@mui/styles';

export const useStylesItemStories = makeStyles({
  image: {
    border: '1px solid white',
    '&::after': {
      content: '" "',
      background:
        'linear-gradient(90deg, rgba(131,58,180,1) 0%, rgba(253,29,29,1) 50%, rgba(252,176,69,1) 100%)',
      position: 'absolute',
      width: '3.9rem',
      height: '3.9rem',
      top: '-.15rem',
      left: '0.05rem',
      borderRadius: '100%',
      zIndex: -1,
    },
  },
});
