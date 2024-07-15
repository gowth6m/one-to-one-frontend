import { Helmet } from 'react-helmet-async';
import { useSettingsContext } from '@/components/settings';

import { Container } from '@mui/material';

// ----------------------------------------------------------------------

export default function DevelopmentPage() {
  const settings = useSettingsContext();

  return (
    <>
      <Helmet>
        <title>Developements</title>
      </Helmet>

      <Container maxWidth={settings.themeStretch ? false : 'xl'}>todo</Container>
    </>
  );
}
