import Logo from '@/components/logo';
import Row from '@/components/core/row';
import { useRouter } from '@/routes/hooks';
import { useResponsive } from '@/hooks/use-responsive';

import { Button } from '@mui/material';

import NavBarWrapper from './nav-bar-wrapper';
import AccountPopover from '../common/account-popover';
import SettingsButton from '../common/settings-button';

interface Props {}

const navList = [
  {
    label: 'Dashboard',
    href: '/dashboard',
  },
  {
    label: '1-2-1s',
    href: '/one-to-ones',
  },
  {
    label: 'Goals',
    href: '/goals',
  },
  {
    label: 'Development',
    href: '/development',
  },
  {
    label: 'Reporting',
    href: '/reporting',
  },
];

const NavBar: React.FC<Props> = () => {
  const router = useRouter();

  const isMobile = useResponsive('down', 'md');

  return (
    <NavBarWrapper>
      {/* Logo */}
      <Logo
        sx={{
          fontSize: isMobile ? 16 : 24,
        }}
      />
      {!isMobile && (
        <Row marginLeft={'auto'} marginRight={4} alignItems={'center'} justifyContent={'center'}>
          {/* Nav links */}
          {navList.map((i) => {
            return (
              <Button key={i.label} onClick={() => router.push(i.href)}>
                {i.label}
              </Button>
            );
          })}
        </Row>
      )}

      <Row gap={2}>
        <SettingsButton />

        <AccountPopover />
      </Row>
    </NavBarWrapper>
  );
};

export default NavBar;
