import Cookies from 'js-cookie';
import toast from 'react-hot-toast';
import { useRouter } from '@/routes/hooks';
import { useState, useEffect } from 'react';
import ApiClient from '@/services/appClient';
import { AppConfig } from '@/config/config-app';
import { useQuery, useMutation } from 'react-query';
import { useLocalStorage } from '@/hooks/use-local-storage';

import { AuthSession } from '../types';
import { AuthContext } from './auth-context';
import { mockSession } from '../_mock/mock-session';

// ----------------------------------------------------------------------------

const STORAGE_KEY = AppConfig.localStorageKeys.session;

export function AuthProvider({
  children,
  useMockSession = false,
}: {
  children: React.ReactNode;
  useMockSession?: boolean;
}) {
  const router = useRouter();

  const [session, setSession] = useState<AuthSession | null>(useMockSession ? mockSession : null);

  const [isLoading, setIsLoading] = useState(true);

  const [loadedLocalStorage, setLoadedLocalStorage] = useState(false);

  const { state, update, reset } = useLocalStorage(STORAGE_KEY, {
    bearer: null,
    user: null,
  });

  // ------------------------------------------------

  useEffect(() => {
    if (state.bearer) {
      ApiClient.setAuthToken({ type: 'Bearer', token: state.bearer });
    }
    setLoadedLocalStorage(true);
  }, [state.bearer]);

  const currentSessionQuery = useQuery({
    queryKey: ['currentSession'],
    queryFn: async () => {
      return await ApiClient.auth.currentSession();
    },
    onSettled: () => setIsLoading(false),
    onSuccess: (res) => {
      setSession(res.data.data);
    },
    enabled: loadedLocalStorage,
  });

  // ------------------------------------------------

  const loginMutation = useMutation({
    mutationKey: 'login',
    mutationFn: async (input: { email: string; password: string }) => {
      return await ApiClient.auth.loginUser(input);
    },
    onSuccess: (res) => {
      ApiClient.setAuthToken({
        type: 'Bearer',
        token: res.data.data.token,
      });
      setSession(res.data.data.user);
      update('bearer', res.data.data.token);
      update('user', res.data.data.user);
      router.push('/');
    },
    onError: () => {
      toast.error('Error logging in');
    },
  });

  // ------------------------------------------------

  const logoutMutation = useMutation({
    mutationKey: 'logout',
    mutationFn: async () => {
      setSession(null);
      reset();
    },
    onSettled: () => {
      Cookies.remove('JSESSIONID');
      router.reload();
    },
  });

  // ------------------------------------------------

  return (
    <AuthContext.Provider
      value={{
        session,
        isLoading,
        loginMutation,
        logoutMutation,
        currentSessionQuery,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
