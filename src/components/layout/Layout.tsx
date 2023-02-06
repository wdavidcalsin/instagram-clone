import { Container } from '@/styles';
import { Box } from '@mui/material';
import { Outlet } from 'react-router';
import { HeaderMobile } from '../header-mobile';
import { NavbarLeft } from '../navbar-left';
import { SidebarRight } from '../sidebar-right';

const Layout = () => {
  return (
    <Container>
      <NavbarLeft />
      <HeaderMobile />
      <Box
        sx={{
          flex: 2,
          bgcolor: 'primary.main',
          height: '100vh',
          paddingLeft: {
            xs: '0',
            sm: '80px',
            md: '80px',
            lg: '15.8rem',
          },
          paddingTop: {
            xs: '50px',
            sm: '10px',
          },
        }}
      >
        <Box>
          <Outlet />
        </Box>
      </Box>
      <SidebarRight />
    </Container>
  );
};

export default Layout;
