// -----------------------------------------------------------------------------

import { useParams } from '@/routes/hooks';
import Column from '@/components/core/column';

// ----------------------------------------------------------------------

const UserProfileView = () => {
  const params = useParams();

  const { userId } = params;

  return <Column>{userId}</Column>;
};

export default UserProfileView;
