import { CoreApiError } from '@/services/responses.model';

// ----------------------------------------------------------------------

interface ErrorParams {
  fieldName: string;
  alternativeFieldName?: string;
}

// ----------------------------------------------------------------------

/**
 * Custom hook to handle errors from the Pollen API
 * - hasError: checks if a field has an error
 * - getErrorMessage: gets the error message for a field
 * - uncapturedErrorMessages: gets all errors that are not associated with a field
 */
const useErrorHandler = (errorMap: CoreApiError[]) => {
  const hasError = ({ fieldName, alternativeFieldName }: ErrorParams): boolean => {
    return errorMap.some((e) => e.fieldName === fieldName || e.fieldName === alternativeFieldName);
  };

  const getErrorMessage = ({ fieldName }: { fieldName: string }): string | undefined => {
    const error = errorMap.find((e) => e.fieldName === fieldName);
    return error?.message;
  };

  const uncapturedErrorMessages = (): CoreApiError[] => {
    return errorMap.filter((e) => !e.fieldName);
  };

  return { hasError, getErrorMessage, uncapturedErrorMessages };
};

export default useErrorHandler;
