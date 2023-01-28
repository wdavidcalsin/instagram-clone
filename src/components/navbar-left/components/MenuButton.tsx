import * as React from 'react';
import { IconsMenu, NavMenuIcon } from '@/components/icons';
import { ListOfMenu } from '@/constants';
import { ToUppercase } from '@/utilities';
import { Box, Button } from '@mui/material';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

const MenuButton = () => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          textAlign: 'left',
          alignContent: 'center',
          position: 'button',
          flex: 2,
        }}
      >
        <Button
          id="basic-button"
          aria-controls={open ? 'basic-menu' : undefined}
          aria-haspopup="true"
          aria-expanded={open ? 'true' : undefined}
          onClick={handleClick}
          sx={{
            padding: 1.5,
            textTransform: 'capitalize',
            width: 'auto',
            justifyContent: 'left',
            borderRadius: 20,
            color: 'rgb(38,38,38)',
          }}
        >
          <NavMenuIcon />
          <Box
            sx={{
              display: {
                xs: 'none',
                sm: 'none',
                md: 'block',
              },
            }}
          >
            More
          </Box>
        </Button>
      </Box>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
        sx={{
          display: 'block',
          fontSize: 2,
          boxShadow: 'none',
        }}
        transformOrigin={{
          vertical: 370,
          horizontal: 'left',
        }}
      >
        {Object.entries(ListOfMenu).map((item, index) => (
          <MenuItem
            key={index}
            onClick={handleClose}
            sx={{
              fontSize: '16px',
              textTransform: 'none',
              width: '15rem',
              display: 'flex',
              justifyContent: 'space-between',
            }}
          >
            <Box>{ToUppercase(item[1]())}</Box>
            {IconsMenu(item[0])}
          </MenuItem>
        ))}
      </Menu>
    </>
  );
};

export default MenuButton;
