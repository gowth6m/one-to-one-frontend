import Logo from '@/components/logo';
import Row from '@/components/core/row';

import NavBarWrapperMobile from './nav-bar-wrapper';
import SettingsButton from '../common/settings-button';

interface Props {}

const NavBarMobile: React.FC<Props> = () => {
  return (
    <NavBarWrapperMobile>
      {/* Logo */}
      <Logo
        sx={{
          fontSize: 24,
        }}
      />

      {/* Nav links */}

      <Row marginLeft={'auto'} gap={1}>
        <SettingsButton />
      </Row>
    </NavBarWrapperMobile>
  );
};

export default NavBarMobile;
