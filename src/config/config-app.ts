export const AppConfig = {
  version: '0.0.1',
  metadata: {
    title: 'One to one',
    description: 'TODO',
    url: 'TODO',
    backgroundColor: 'TODO',
    themeColor: 'TODO',
  },
  navbarUrl: '',
  assets: {
    loginLogo: {
      light: '/static/branding/logo_login.png',
      dark: '/static/branding/logo_login.png',
    },
    drawerLogo: {
      light: '/static/branding/logo_navdrawer.png',
      dark: '/static/branding/logo_navdrawer_dark.png',
    },
    icons: [
      {
        src: '/static/icons/Icon-192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/static/icons/Icon-512.png',
        sizes: '512x512',
        type: 'image/png',
      },
      {
        src: '/static/icons/Icon-maskable-192.png',
        sizes: '192x192',
        type: 'image/png',
        purpose: 'maskable',
      },
      {
        src: '/static/icons/Icon-maskable-512.png',
        sizes: '512x512',
        type: 'image/png',
        purpose: 'maskable',
      },
    ],
  },
  intercomScript: '/js/intercom.js',
  newRelicScript: '/js/newrelic.js',
  knowledgeBaseSupportLink: 'https://knowledge-base.helpjuice.com/',
  localStorageKeys: {
    drawer: 'oneToOneAppDrawerState',
    theme: 'oneToOneAppTheme',
    settings: 'oneToOneAppSettings',
    session: 'oneToOneAppSession',
  },
};
