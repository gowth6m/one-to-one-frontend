import { useEffect } from 'react';
import { useRouter } from '@/routes/hooks';

// ----------------------------------------------------------------------

export default function IndexPage() {
  const router = useRouter();

  useEffect(() => {
    router.push('/dashboard');
  }, [router]);

  return null;
}
