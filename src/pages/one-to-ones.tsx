import { Helmet } from 'react-helmet-async';
import { useSettingsContext } from '@/components/settings';
import OneToOnesView from '@/sections/one-to-ones/views/one-to-ones-view';

import { Container } from '@mui/material';

// ----------------------------------------------------------------------

export default function OneToOnesPage() {
  const settings = useSettingsContext();

  return (
    <>
      <Helmet>
        <title>One to ones</title>
      </Helmet>

      <Container maxWidth={settings.themeStretch ? false : 'xl'}>
        <OneToOnesView />
      </Container>
    </>
  );
}
