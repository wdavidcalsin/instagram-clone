import { Box } from '@mui/material';
import NavbarLeftDesktop from './NavbarLeftDesktop';
import NavbarLeftMobile from './NavbarLeftMobile';

const NavbarLeft = () => {
  return (
    <>
      <Box
        sx={{
          flex: 1,
          display: {
            xs: 'none',
            sm: 'block',
            md: 'block',
            lg: 'block',
          },
        }}
      >
        <NavbarLeftDesktop />
      </Box>
      <Box
        sx={{
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
