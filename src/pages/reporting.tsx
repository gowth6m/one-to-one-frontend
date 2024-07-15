import { Helmet } from 'react-helmet-async';
import { useSettingsContext } from '@/components/settings';

import { Container } from '@mui/material';

// ----------------------------------------------------------------------

export default function ReportingPage() {
  const settings = useSettingsContext();

  return (
    <>
      <Helmet>
        <title>Dashboard</title>
      </Helmet>

      <Container maxWidth={settings.themeStretch ? false : 'xl'}>todo</Container>
    </>
  );
}
