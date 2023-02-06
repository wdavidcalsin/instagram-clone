import { InstagramLogoTxt } from '@/components/svg';
import { useColorMode } from '@/context';

const InstagramLogo = () => {
  const { mode } = useColorMode();

  return (
    <InstagramLogoTxt
      fill={mode === 'light' ? '#121212' : '#ffffff'}
      width="103px"
    />
  );
};

export default InstagramLogo;
