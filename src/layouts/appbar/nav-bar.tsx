import Logo from '@/components/logo';
import Row from '@/components/core/row';

import NavBarWrapper from './nav-bar-wrapper';
import AccountPopover from '../common/account-popover';
import SettingsButton from '../common/settings-button';

interface Props {}

const NavBar: React.FC<Props> = () => {
  return (
    <NavBarWrapper>
      {/* Logo */}
      <Logo
        sx={{
          fontSize: 24,
        }}
      />

      {/* Nav links */}

      <Row marginLeft={'auto'} gap={1}>
        <SettingsButton />

        <AccountPopover />
      </Row>
    </NavBarWrapper>
  );
};

export default NavBar;
