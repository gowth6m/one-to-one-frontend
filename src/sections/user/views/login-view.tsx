import { useState } from 'react';
import { useFormik } from 'formik';
import { useAuthContext } from '@/sections/auth';
import { RouterLink } from '@/routes/components';
import CoreButton from '@/components/core/core-button';
import { CoreApiError } from '@/services/responses.model';
import { LoadingTopbar } from '@/components/loading-screen';
import FormikTextfield from '@/components/core/formik/formik-textfield';

import { Box, Link, Alert, Badge, Container, Typography } from '@mui/material';

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
        width: '100%',
      }}
    >
      {loginMutation.isLoading && <LoadingTopbar />}

      <Badge
        badgeContent={'Hello there 👋'}
        color={'primary'}
        sx={{
          marginTop: { xs: 8, md: 16 },
        }}
      >
        <Box
          sx={{
            mb: 0,
            width: '100%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Typography variant={'h2'} sx={{ fontWeight: 700 }}>
            Login
          </Typography>
        </Box>
      </Badge>

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

        <Typography variant="body2" sx={{ mt: 2, textAlign: 'center' }}>
          Don't have an account?{' '}
          <Link
            component={RouterLink}
            href={'/user/register'}
            style={{ textDecoration: 'none', fontWeight: 700 }}
          >
            Register
          </Link>
        </Typography>

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
