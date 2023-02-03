import { makeStyles } from '@mui/styles';

export const useStylesButtonAction = makeStyles((theme) => ({
  root: {
    color: theme.palette.secondary.contrastText,

    '&.Mui-selected': {
      color: theme.palette.secondary.contrastText + '!important',
    },
  },
}));
