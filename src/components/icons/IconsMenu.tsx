import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import BookmarkBorderOutlinedIcon from '@mui/icons-material/BookmarkBorderOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import AvTimerOutlinedIcon from '@mui/icons-material/AvTimerOutlined';
import SmsFailedOutlinedIcon from '@mui/icons-material/SmsFailedOutlined';

const IconsMenu = (itemName: string) => {
  switch (itemName) {
    case 'settings':
      return <SettingsOutlinedIcon sx={{ paddingRight: '18px' }} />;
    case 'saved':
      return <BookmarkBorderOutlinedIcon sx={{ paddingRight: '18px' }} />;
    case 'switch_appearance':
      return <DarkModeOutlinedIcon sx={{ paddingRight: '18px' }} />;
    case 'your_activity':
      return <AvTimerOutlinedIcon sx={{ paddingRight: '18px' }} />;
    case 'report_a_problem':
      return <SmsFailedOutlinedIcon sx={{ paddingRight: '18px' }} />;
    case 'switch_accounts':
      return null;
    case 'log_out':
      return null;
    default:
      return null;
  }
};

export default IconsMenu;
