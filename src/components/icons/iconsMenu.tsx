import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import BookmarkBorderOutlinedIcon from '@mui/icons-material/BookmarkBorderOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import AvTimerOutlinedIcon from '@mui/icons-material/AvTimerOutlined';
import SmsFailedOutlinedIcon from '@mui/icons-material/SmsFailedOutlined';

const IconsMenu = (itemName: string) => {
  switch (itemName) {
    case 'settings':
      return <SettingsOutlinedIcon />;
    case 'saved':
      return <BookmarkBorderOutlinedIcon />;
    case 'switch_appearance':
      return <DarkModeOutlinedIcon />;
    case 'your_activity':
      return <AvTimerOutlinedIcon />;
    case 'report_a_problem':
      return <SmsFailedOutlinedIcon />;
    case 'switch_accounts':
      return null;
    case 'log_out':
      return null;
    default:
      return null;
  }
};

export default IconsMenu;
