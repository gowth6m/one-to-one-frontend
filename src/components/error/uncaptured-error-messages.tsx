import React, { useMemo } from 'react';
import useErrorHandler from '@/hooks/use-error-handler';
import { CoreApiError } from '@/services/responses.model';

import { Alert, SxProps } from '@mui/material';

import Column from '../core/column';

// ----------------------------------------------------------------------

interface Props {
  errorMap: CoreApiError[];
  extraErrorFieldsToShow?: string[];
  sx?: SxProps;
}

// ----------------------------------------------------------------------

const UncapturedErrorMessages: React.FC<Props> = ({
  errorMap,
  extraErrorFieldsToShow = [],
  sx,
}) => {
  const { uncapturedErrorMessages, hasError, getErrorMessage } = useErrorHandler(errorMap);

  const errorsToDisplay = useMemo(() => {
    const uncapturedErrors = uncapturedErrorMessages() || [];
    const extraErrors = extraErrorFieldsToShow
      .filter((field) => hasError({ fieldName: field }))
      .map((field) => ({
        message: getErrorMessage({ fieldName: field }),
      }));

    return [...uncapturedErrors, ...extraErrors];
  }, [uncapturedErrorMessages, extraErrorFieldsToShow, hasError, getErrorMessage]);

  // --------- FOR TESTING PURPOSES ONLY -----------------------------------------

  // errorsToDisplay.push(
  //   {
  //     message: 'Testing an error message, how does it look?',
  //   },
  //   {
  //     message: 'Testing an error message, how does it look?',
  //   }
  // );

  // ------------------------------------------------------------------------------

  if (errorsToDisplay.length === 0) return null;

  return (
    <Column id={'uncaptured-error-messages'} sx={sx}>
      {errorsToDisplay.map((error, index) => {
        if (!error.message) return null;
        return (
          <Alert key={index} variant="filled" severity="error">
            {error.message}
          </Alert>
        );
      })}
    </Column>
  );
};

export default UncapturedErrorMessages;
