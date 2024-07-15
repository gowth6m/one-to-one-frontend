import { Helmet } from 'react-helmet-async';
import LoginView from '@/sections/user/views/login-view';

// ------------------------------------------------

export default function LoginPage() {
  return (
    <>
      <Helmet>
        <title>Login</title>
      </Helmet>

      <LoginView />
    </>
  );
}
