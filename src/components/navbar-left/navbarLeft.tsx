import * as React from 'react';
import { useStylesButtonAction } from '@/styles';

import { ListOfRoutes } from '@/constants';
import InstagramIcon from '@mui/icons-material/Instagram';
import {
  BottomNavigation,
  BottomNavigationAction,
  SxProps,
} from '@mui/material';
import Box from '@mui/material/Box';

import { useColorMode } from '@/context';
import { Link } from 'react-router-dom';
import { IconsNavRoute } from '../icons';
import { InstagramLogoTxt } from '../svg';
import { MenuButton } from './components';

const containerStyles: SxProps = {
  flexDirection: 'column',
  width: {
    xs: '55px',
    sm: '55px',
    md: '55px',
    lg: '15%',
  },
  display: {
    xs: 'none',
    sm: 'block',
  },
  borderRight: '1px solid #DBDBDB',
  height: '100vh',
  padding: '12px',
  position: 'fixed',
  top: '0px',
  left: '0px',
  bgcolor: 'primary.main',
};

const routeLinks = (route: string) => {
  return route === 'home' ? '/' : route;
};

const NavbarLeft = () => {
  const [value, setValue] = React.useState(0);

  const classes = useStylesButtonAction();

  const { mode } = useColorMode();

  return (
    <Box sx={containerStyles}>
      <Box
        sx={{
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
              <InstagramLogoTxt
                fill={mode === 'light' ? '#121212' : '#ffffff'}
                width="103px"
              />
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

export default NavbarLeft;
