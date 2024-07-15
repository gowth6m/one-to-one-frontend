import { Helmet } from 'react-helmet-async';
import RegisterView from '@/sections/user/views/register-view';

// ------------------------------------------------

export default function LoginPage() {
  return (
    <>
      <Helmet>
        <title>Register</title>
      </Helmet>

      <RegisterView />
    </>
  );
}
