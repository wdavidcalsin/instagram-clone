import * as React from 'react';

import { ListOfRoutes } from '@/constants';
import {
  BottomNavigation,
  BottomNavigationAction,
  SxProps,
} from '@mui/material';
import Box from '@mui/material/Box';

import { Link } from 'react-router-dom';
import { IconsNavRoute } from '../icons';
import { InstagramLogoTxt } from '../svg';
import { MenuButton } from './components';

const containerStyles: SxProps = {
  display: 'flex',
  flexDirection: 'column',
  width: '20%',
  borderRight: '1px solid #DBDBDB',
  height: '100vh',
  padding: '12px',
  position: 'fixed',
  top: '0px',
  left: '0px',
};

const routeLinks = (route: string) => {
  return route === 'home' ? '/' : route;
};

const NavbarLeft = () => {
  const [value, setValue] = React.useState(0);

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
          <Link to="/">
            <InstagramLogoTxt fill="rgb(38,38,38)" width="103px" />
          </Link>
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
              label={route[0]}
              icon={IconsNavRoute(route[0])}
              sx={{
                padding: 1.5,
                flexDirection: 'row',
                justifyContent: 'left',
                textTransform: 'capitalize',
                width: '100%',
                borderRadius: 20,
                color: 'rgb(38,38,38)',
              }}
            />
          ))}
        </BottomNavigation>

        <MenuButton />
      </Box>
    </Box>
  );
};

export default NavbarLeft;
