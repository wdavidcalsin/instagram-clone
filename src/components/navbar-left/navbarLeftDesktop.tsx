import { useStylesButtonAction } from '@/styles';
import * as React from 'react';

import { ListOfRoutes } from '@/constants';
import InstagramIcon from '@mui/icons-material/Instagram';
import {
  BottomNavigation,
  BottomNavigationAction,
  SxProps,
} from '@mui/material';
import Box from '@mui/material/Box';

import { Link } from 'react-router-dom';
import { IconsNavRoute } from '../icons';
import { InstagramLogo, MenuButton } from './components';

const containerStyles: SxProps = {
  display: 'flex',
  flexDirection: 'column',
  borderRight: '1px solid',
  borderColor: 'border.main',
  height: '100vh',
  padding: '12px',
  bgcolor: 'primary.main',
};

const routeLinks = (route: string) => {
  return route === 'home' ? '/' : route;
};

const NavbarLeftDesktop = () => {
  const [value, setValue] = React.useState(0);

  const classes = useStylesButtonAction();

  return (
    <Box sx={containerStyles}>
      <Box
        sx={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignContent: 'space-between',
        }}
      >
        <Box
          sx={{
            paddingX: '12px',
            paddingTop: '20px',
            paddingBottom: '16px',
            textAlign: 'left',
            height: 'auto',
          }}
        >
          <Box
            sx={{
              display: { xs: 'none', sm: 'none', md: 'none', lg: 'block' },
            }}
          >
            <Link to="/">
              <InstagramLogo />
            </Link>
          </Box>

          <Box
            sx={{
              display: { xs: 'block', sm: 'block', md: 'block', lg: 'none' },
            }}
          >
            <Link to="/">
              <InstagramIcon
                width="103px"
                sx={{ color: 'secondary.contrastText' }}
              />
            </Link>
          </Box>
        </Box>

        <BottomNavigation
          showLabels
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
          sx={{
            flexDirection: 'column',
            height: 'auto',
            width: '100%',
            flex: 3,
          }}
        >
          {Object.entries(ListOfRoutes).map((route, index) => (
            <BottomNavigationAction
              component={Link}
              to={routeLinks(route[0])}
              key={index}
              label={
                <Box
                  sx={{
                    display: {
                      xs: 'none',
                      sm: 'none',
                      md: 'none',
                      lg: 'block',
                    },
                  }}
                >
                  {route[0]}
                </Box>
              }
              icon={IconsNavRoute(route[0])}
              sx={{
                padding: 1.5,
                flexDirection: 'row',
                justifyContent: 'left',
                textTransform: 'capitalize',
                width: '100%',
                borderRadius: 20,
                color: 'secondary.contrastText',
              }}
              classes={{ root: classes.root }}
            />
          ))}
        </BottomNavigation>

        <MenuButton />
      </Box>
    </Box>
  );
};

export default NavbarLeftDesktop;
