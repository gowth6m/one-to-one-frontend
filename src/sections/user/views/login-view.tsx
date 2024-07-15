import { useState } from 'react';
import { useFormik } from 'formik';
import Logo from '@/components/logo';
import { useAuthContext } from '@/sections/auth';
import CoreButton from '@/components/core/core-button';
import { CoreApiError } from '@/services/responses.model';
import { LoadingTopbar } from '@/components/loading-screen';
import FormikTextfield from '@/components/core/formik/formik-textfield';

import { Box, Alert, Container } from '@mui/material';

// ----------------------------------------------------------------------------

export type LoginState = 'initial' | 'error';

// ----------------------------------------------------------------------------

const LoginView = () => {
  const { loginMutation } = useAuthContext();
  const [errorMap] = useState<CoreApiError[]>([]);

  // ------ FORMIK ----------------------------------------------------------------

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    onSubmit: async (values) => {
      loginMutation.mutate({
        email: values.email,
        password: values.password,
      });
    },
  });

  // ------ RENDER ----------------------------------------------------------------

  return (
    <Container
      maxWidth="xs"
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 2,
        height: '100vh',
        width: '100%',
      }}
    >
      {loginMutation.isLoading && <LoadingTopbar />}

      <Box
        sx={{
          mb: 0,
          width: '100%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Logo />
      </Box>

      <Box
        component={'form'}
        onSubmit={(e) => {
          e.preventDefault();
          formik.handleSubmit();
        }}
        sx={{
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          mb: 20,
        }}
      >
        <FormikTextfield formik={formik} field="email" label="Email" errorMap={errorMap} />

        <FormikTextfield
          formik={formik}
          field="password"
          label="Password"
          type="password"
          errorMap={errorMap}
        />

        <CoreButton
          buttonVariant="primary"
          buttonWidth="full"
          type={'submit'}
          disabled={loginMutation.isLoading}
          sx={{
            mt: 0.5,
          }}
        >
          Login
        </CoreButton>

        {loginMutation.isError && (
          <Alert
            severity="error"
            sx={{
              mt: 2,
            }}
          >
            Error logging you in.
          </Alert>
        )}
      </Box>
    </Container>
  );
};

export default LoginView;
