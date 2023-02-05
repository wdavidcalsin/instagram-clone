import { Container } from '@/styles';
import { Box } from '@mui/material';
import { Outlet } from 'react-router';
import { NavbarLeft } from '../navbar-left';
import { SidebarRight } from '../sidebar-right';

const Layout = () => {
  return (
    <Container>
      <NavbarLeft />
      <Box
        sx={{
          flex: 2,
          bgcolor: 'primary.main',
          height: '100vh',
          marginLeft: {
            xs: '0',
            sm: '80px',
            md: '80px',
            lg: '15.5rem',
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
