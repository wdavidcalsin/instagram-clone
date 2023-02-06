import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import AddBoxOutlinedIcon from '@mui/icons-material/AddBoxOutlined';
import ExploreOutlinedIcon from '@mui/icons-material/ExploreOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import ForumOutlinedIcon from '@mui/icons-material/ForumOutlined';
import HomeIcon from '@mui/icons-material/Home';
import OndemandVideoIcon from '@mui/icons-material/OndemandVideo';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';

const iconsResponsivePadding = { xs: '10px', sm: '0', md: '0', lg: '18px' };

const IconsNavRoute = (routeName: string) => {
  switch (routeName) {
    case 'home':
      return (
        <HomeIcon
          sx={{
            paddingRight: iconsResponsivePadding,
            color: 'secondary.contrastText',
          }}
        />
      );
    case 'search':
      return (
        <SearchOutlinedIcon
          sx={{
            paddingRight: iconsResponsivePadding,
            color: 'secondary.contrastText',
          }}
        />
      );
    case 'explore':
      return (
        <ExploreOutlinedIcon
          sx={{
            paddingRight: iconsResponsivePadding,
            color: 'secondary.contrastText',
          }}
        />
      );
    case 'reels':
      return (
        <OndemandVideoIcon
          sx={{
            paddingRight: iconsResponsivePadding,
            color: 'secondary.contrastText',
          }}
        />
      );
    case 'messages':
      return (
        <ForumOutlinedIcon
          sx={{
            paddingRight: iconsResponsivePadding,
            color: 'secondary.contrastText',
          }}
        />
      );
    case 'notifications':
      return (
        <FavoriteBorderOutlinedIcon
          sx={{
            paddingRight: iconsResponsivePadding,
            color: 'secondary.contrastText',
          }}
        />
      );
    case 'create':
      return (
        <AddBoxOutlinedIcon
          sx={{
            paddingRight: iconsResponsivePadding,
            color: 'secondary.contrastText',
          }}
        />
      );
    case 'profile':
      return (
        <AccountCircleIcon
          sx={{
            paddingRight: iconsResponsivePadding,
            color: 'secondary.contrastText',
          }}
        />
      );
    default:
      return (
        <HomeIcon
          sx={{
            paddingRight: iconsResponsivePadding,
            color: 'secondary.contrastText',
          }}
        />
      );
  }
};

export default IconsNavRoute;
