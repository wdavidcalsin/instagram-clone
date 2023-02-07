import { ListOfRoutes } from '@/constants';
import { Box } from '@mui/material';
import { Link } from 'react-router-dom';
import { IconsNavRoute } from '../icons';
import { InstagramLogo } from '../navbar-left';

const HeaderMobile = () => {
  return (
    <Box
      sx={{
        position: 'fixed',
        top: '0',
        right: '0',
        left: '0',
        borderBottom: '1px solid',
        borderColor: 'border.main',
        height: '50px',
        display: {
          xs: 'block',
          sm: 'none',
          md: 'none',
          lg: 'none',
        },
        zIndex: '10',
        bgcolor: 'primary.main',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignContent: 'center',
          height: '100%',
          paddingX: '10px',
        }}
      >
        <InstagramLogo />
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'right',
            alignContent: 'center',
            alignItems: 'center',
            height: '100%',
          }}
        >
          {Object.entries(ListOfRoutes)
            .filter(
              (route) => route[0] === 'create' || route[0] === 'notifications'
            )
            .reverse()
            .map((route, index) => (
              <Link key={index} to={route[0]}>
                {IconsNavRoute(route[0])}
              </Link>
            ))}
        </Box>
      </Box>
    </Box>
  );
};

export default HeaderMobile;
