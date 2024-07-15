import { CoreApiError } from '@/services/responses.model';

import { Alert } from '@mui/material';

// ----------------------------------------------------------------------

const FieldError = ({
  errorMap,
  fieldName,
  id,
}: {
  errorMap: CoreApiError[];
  fieldName: string;
  id?: string;
}) => {
  const error = errorMap.find((error) => error.fieldName === fieldName);
  return error ? (
    <Alert id={id} severity="error" variant="filled">
      {error.message}
    </Alert>
  ) : null;
};

export default FieldError;
