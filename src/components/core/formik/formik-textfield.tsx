/* eslint-disable react-refresh/only-export-components */
import React from 'react';
import { FormikProps } from 'formik';
import useErrorHandler from '@/hooks/use-error-handler';
import { CoreApiError } from '@/services/responses.model';

import { TextField, TextFieldProps } from '@mui/material';

// ----------------------------------------------------------------------

type Props = {
  formik: FormikProps<any>;
  errorMap: CoreApiError[];
  field: string;
  helperText?: string;
  readOnly?: boolean;
} & TextFieldProps;

// ----------------------------------------------------------------------

const FormikTextfield: React.FC<Props> = ({
  formik,
  errorMap,
  field,
  helperText,
  readOnly,
  ...other
}) => {
  const { hasError, getErrorMessage } = useErrorHandler(errorMap);

  const generateHelperText = () => {
    return (
      getErrorMessage({ fieldName: field }) ?? formik.errors?.[field]?.toString() ?? helperText
    );
  };

  return (
    <TextField
      id={other.id}
      type={other.type ?? 'text'}
      name={field}
      variant={other.variant ?? 'outlined'}
      value={getNestedObject(formik?.values, field) || ''}
      onChange={(e) => {
        formik.handleChange(e);
        other.onChange?.(e);
      }}
      onBlur={(e) => {
        formik.handleBlur(e);
        other.onBlur?.(e);
      }}
      error={
        hasError({ fieldName: field }) ||
        (Boolean(formik.errors[field]) && Boolean(formik.touched[field]))
      }
      helperText={generateHelperText()}
      margin={'normal'}
      inputProps={{ readOnly: readOnly, ...other.inputProps }}
      {...other}
    />
  );
};

export default FormikTextfield;

// ----------------------------------------------------------------------

export const getNestedObject = (nestedObj: any, pathStr: string) => {
  const pathArr = pathStr.split('.').reduce<string[]>((acc, part) => {
    // Handle array indices
    // eslint-disable-next-line no-useless-escape
    const arrayParts = part.split(/[\[\]]/).filter(Boolean);
    return acc.concat(arrayParts);
  }, []);

  return pathArr.reduce(
    (obj, key) => (obj && obj[key] !== undefined ? obj[key] : undefined),
    nestedObj
  );
};
