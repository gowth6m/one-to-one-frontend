import '@/styles/global.css';
import Routes from '@/routes/sections';
import ThemeProvider from '@/theme/theme-provider';
import ProgressBar from '@/components/progress-bar';
import CoreToast from '@/components/core/core-toast';
import { useScrollToTop } from '@/hooks/use-scroll-to-top';
import { MotionLazy } from '@/components/animate/motion-lazy';
import { QueryClient, QueryClientProvider } from 'react-query';
import { SettingsDrawer, SettingsProvider } from '@/components/settings';

import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';

import { AuthProvider } from './sections/auth';

// ----------------------------------------------------------------------------

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: false,
    },
  },
});

function App() {
  useScrollToTop();

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <QueryClientProvider client={queryClient}>
        <AuthProvider useMockSession={false}>
          <SettingsProvider
            defaultSettings={{
              themeMode: 'light', // 'light' | 'dark'
              themeDirection: 'ltr', //  'rtl' | 'ltr'
              themeLayout: 'vertical', // 'vertical' | 'horizontal' | 'mini'
              themeStretch: false,
            }}
          >
            <ThemeProvider>
              <MotionLazy>
                <SettingsDrawer />
                <ProgressBar />
                <CoreToast />
                <Routes />
              </MotionLazy>
            </ThemeProvider>
          </SettingsProvider>
        </AuthProvider>
      </QueryClientProvider>
    </LocalizationProvider>
  );
}

export default App;
