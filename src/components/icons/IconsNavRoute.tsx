import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import AddBoxOutlinedIcon from '@mui/icons-material/AddBoxOutlined';
import ExploreOutlinedIcon from '@mui/icons-material/ExploreOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import ForumOutlinedIcon from '@mui/icons-material/ForumOutlined';
import HomeIcon from '@mui/icons-material/Home';
import OndemandVideoIcon from '@mui/icons-material/OndemandVideo';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';

const IconsNavRoute = (routeName: string) => {
  switch (routeName) {
    case 'home':
      return <HomeIcon sx={{ paddingRight: '18px' }} />;
    case 'search':
      return <SearchOutlinedIcon sx={{ paddingRight: '18px' }} />;
    case 'explore':
      return <ExploreOutlinedIcon sx={{ paddingRight: '18px' }} />;
    case 'reels':
      return <OndemandVideoIcon sx={{ paddingRight: '18px' }} />;
    case 'messages':
      // return <TelegramIcon sx={{ paddingRight: '18px' }} />;
      return <ForumOutlinedIcon sx={{ paddingRight: '18px' }} />;
    case 'notifications':
      return <FavoriteBorderOutlinedIcon sx={{ paddingRight: '18px' }} />;
    case 'create':
      return <AddBoxOutlinedIcon sx={{ paddingRight: '18px' }} />;
    case 'profile':
      return <AccountCircleIcon sx={{ paddingRight: '18px' }} />;
    default:
      return <HomeIcon sx={{ paddingRight: '18px' }} />;
  }
};

export default IconsNavRoute;
