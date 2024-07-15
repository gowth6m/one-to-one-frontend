import Logo from '@/components/logo';
import Row from '@/components/core/row';
import { useRouter } from '@/routes/hooks';

import { Button } from '@mui/material';

import NavBarWrapper from './nav-bar-wrapper';
import AccountPopover from '../common/account-popover';
import SettingsButton from '../common/settings-button';

interface Props {}

const navList = [
  {
    label: '1-2-1',
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

  return (
    <NavBarWrapper>
      {/* Logo */}
      <Logo
        sx={{
          fontSize: 24,
        }}
      />

      <Row marginX={'auto'}>
        {/* Nav links */}
        {navList.map((i) => {
          return (
            <Button key={i.label} onClick={() => router.push(i.href)}>
              {i.label}
            </Button>
          );
        })}
      </Row>

      <Row marginLeft={'auto'} gap={1}>
        <SettingsButton />

        <AccountPopover />
      </Row>
    </NavBarWrapper>
  );
};

export default NavBar;
