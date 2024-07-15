import { useState } from 'react';
import { AxiosError } from 'axios';
import { useFormik } from 'formik';
import Logo from '@/components/logo';
import { useMutation } from 'react-query';
import { useRouter } from '@/routes/hooks';
import ApiClient from '@/services/appClient';
import { useAuthContext } from '@/sections/auth';
import CoreButton from '@/components/core/core-button';
import { useSettingsContext } from '@/components/settings';
import { LoadingTopbar } from '@/components/loading-screen';
import FormikTextfield from '@/components/core/formik/formik-textfield';
import { CoreApiError, CoreApiResponse } from '@/services/responses.model';

import { Box, Container } from '@mui/material';

// ----------------------------------------------------------------------------

type LoginResponse = CoreApiResponse<{
  locked: boolean;
  captchaRequired: boolean;
}>;

export type LoginState = 'initial' | 'error';

// ----------------------------------------------------------------------------

const LoginView = () => {
  const router = useRouter();
  const settings = useSettingsContext();
  const { currentSessionQuery, loginMutation } = useAuthContext();
  const [errorMap, setErrorMap] = useState<CoreApiError[]>([]);

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

      <Box sx={{ mb: 4, width: '100%' }}>
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
          gap: 2,
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
          sx={{
            mt: 1,
          }}
        >
          Login
        </CoreButton>
      </Box>
    </Container>
  );
};

export default LoginView;

const styles = {};
