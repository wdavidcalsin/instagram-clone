import { Box } from '@mui/material';
import NavbarLeftDesktop from './navbar-left-desktop';
import NavbarLeftMobile from './navbar-left-mobile';

const NavbarLeft = () => {
  return (
    <>
      <Box
        sx={{
          position: 'fixed',
          top: '0px',
          left: '0px',
          zIndex: 10,

          display: {
            xs: 'none',
            sm: 'block',
            md: 'block',
            lg: 'block',
          },
          width: {
            xs: '80px',
            sm: '80px',
            md: '80px',
            lg: '14.1rem',
          },
          bgcolor: 'orange',
        }}
      >
        <NavbarLeftDesktop />
      </Box>
      <Box
        sx={{
          position: 'fixed',
          bottom: '0px',
          left: '0px',
          right: '0px',
          zIndex: 10,
          display: {
            xs: 'block',
            sm: 'none',
            md: 'none',
            lg: 'none',
          },
        }}
      >
        <NavbarLeftMobile />
      </Box>
    </>
  );
};

export default NavbarLeft;
