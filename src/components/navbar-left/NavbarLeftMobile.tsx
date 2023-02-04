import { useStylesButtonActionMobile } from '@/styles';
import * as React from 'react';

import { ListOfRoutesMobile } from '@/constants';
import {
  BottomNavigation,
  BottomNavigationAction,
  SxProps,
} from '@mui/material';
import Box from '@mui/material/Box';

import { Link } from 'react-router-dom';
import { IconsNavRoute } from '../icons';

const containerStyles: SxProps = {
  width: '100%',
  borderTop: '1px solid',
  borderColor: 'border.main',
  height: '4rem',
  position: 'fixed',
  bottom: '0px',
  left: '0px',
  bgcolor: 'red',
};

const routeLinks = (route: string) => {
  return route === 'home' ? '/' : route;
};

const NavbarLeftMobile = () => {
  const [value, setValue] = React.useState(0);

  const classes = useStylesButtonActionMobile();

  return (
    <Box sx={containerStyles}>
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        sx={{
          flexDirection: 'row',
          alignContent: 'center',
          height: '100%',
          alignItems: 'center',
          width: '100%',
        }}
      >
        {Object.entries(ListOfRoutesMobile).map((route, index) => (
          <BottomNavigationAction
            component={Link}
            to={routeLinks(route[0])}
            key={index}
            icon={IconsNavRoute(route[0])}
            sx={{
              flexDirection: 'row',
              textTransform: 'capitalize',
              textAlign: 'center',
              width: '100%',
              borderRadius: 20,
              color: 'secondary.contrastText',
              margin: '0',
              minWidth: 0,
            }}
            classes={{ root: classes.root, iconOnly: classes.iconOnly }}
          />
        ))}
      </BottomNavigation>
    </Box>
  );
};

export default NavbarLeftMobile;
