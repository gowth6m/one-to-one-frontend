import React, { useEffect } from 'react';
import { useRouter } from '@/routes/hooks';
import { useAuthContext } from '@/sections/auth';
import { LoadingScreen } from '@/components/loading-screen';

// ------------------------------------------------

interface Props {
  children: React.ReactNode;
}

export const PrivateGuard: React.FC<Props> = ({ children }) => {
  const router = useRouter();
  const { session, isLoading } = useAuthContext();

  useEffect(() => {
    if (!session && !isLoading) {
      router.push('/user/login');
    }
  }, [session, isLoading, router]);

  if (isLoading) {
    return <LoadingScreen />;
  }

  return <>{children}</>;
};
