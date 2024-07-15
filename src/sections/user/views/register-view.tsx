import * as yup from 'yup';
import { useState } from 'react';
import { useFormik } from 'formik';
import toast from 'react-hot-toast';
import Logo from '@/components/logo';
import { useMutation } from 'react-query';
import { useRouter } from '@/routes/hooks';
import ApiClient from '@/services/appClient';
import { RouterLink } from '@/routes/components';
import { CreateUserPayload } from '@/sections/auth';
import CoreButton from '@/components/core/core-button';
import { CoreApiError } from '@/services/responses.model';
import { LoadingTopbar } from '@/components/loading-screen';
import FormikTextfield from '@/components/core/formik/formik-textfield';

import { Box, Link, Alert, Container, Typography } from '@mui/material';

// ----------------------------------------------------------------------------

const RegisterView = () => {
  const router = useRouter();
  const [errorMap] = useState<CoreApiError[]>([]);

  // ------ FORMIK ----------------------------------------------------------------

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
      confirmPassword: '',
      firstName: '',
      lastName: '',
    },
    onSubmit: async (values) => {
      registerMutation.mutate({
        email: values.email,
        password: values.password,
        firstName: values.firstName,
        lastName: values.lastName,
      });
    },
    validationSchema: yup.object().shape({
      email: yup.string().email().required(),
      password: yup.string().min(8).required(),
      confirmPassword: yup
        .string()
        .oneOf([yup.ref('password')], 'Passwords must match')
        .required(),
      firstName: yup.string().required(),
      lastName: yup.string().required(),
    }),
  });

  const registerMutation = useMutation({
    mutationFn: async (values: CreateUserPayload) => {
      return await ApiClient.auth.registerUser(values);
    },
    onSuccess: () => {
      router.push('/user/login');
    },
    onError: () => {
      toast.error('Error registering user');
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
        mY: 2,
      }}
    >
      {registerMutation.isLoading && <LoadingTopbar />}

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

        <FormikTextfield
          formik={formik}
          field="confirmPassword"
          label="Confirm password"
          type="password"
          errorMap={errorMap}
        />

        <FormikTextfield formik={formik} field="firstName" label="First Name" errorMap={errorMap} />

        <FormikTextfield formik={formik} field="lastName" label="Last Name" errorMap={errorMap} />

        <CoreButton
          buttonVariant="primary"
          buttonWidth="full"
          type={'submit'}
          disabled={registerMutation.isLoading}
          sx={{
            mt: 0.5,
          }}
        >
          Register
        </CoreButton>

        <Typography variant="body2" sx={{ mt: 2, textAlign: 'center' }}>
          Have an account?{' '}
          <Link
            component={RouterLink}
            href={'/user/login'}
            style={{ textDecoration: 'none', fontWeight: 700 }}
          >
            Login
          </Link>
        </Typography>

        {registerMutation.isError && (
          <Alert
            severity="error"
            sx={{
              mt: 2,
            }}
          >
            Error creating an account.
          </Alert>
        )}
      </Box>
    </Container>
  );
};

export default RegisterView;
