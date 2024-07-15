import { Helmet } from 'react-helmet-async';
import { useSettingsContext } from '@/components/settings';
import UserProfileView from '@/sections/user/views/user-profile-view';

import { Container } from '@mui/material';

// ----------------------------------------------------------------------

const UserProfilePage = () => {
  const settings = useSettingsContext();

  return (
    <>
      <Helmet>
        <title>Profile</title>
      </Helmet>

      <Container maxWidth={settings.themeStretch ? false : 'xl'}>
        <UserProfileView />
      </Container>
    </>
  );
};

export default UserProfilePage;
