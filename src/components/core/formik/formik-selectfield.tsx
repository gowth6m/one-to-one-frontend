/* eslint-disable react-refresh/only-export-components */
import React from 'react';
import { FormikProps } from 'formik';
import useErrorHandler from '@/hooks/use-error-handler';
import { CoreApiError } from '@/services/responses.model';

import {
  Select,
  SxProps,
  MenuItem,
  InputLabel,
  FormControl,
  SelectProps,
  FormHelperText,
  SelectChangeEvent,
} from '@mui/material';

// ----------------------------------------------------------------------

type Props = {
  formik: FormikProps<any>;
  errorMap: CoreApiError[];
  field: string;
  helperText?: string;
  required?: boolean;
  label?: string;
  sx?: SxProps;
  children: React.ReactNode;
  showNoneOption?: boolean;
  showNoneCustomText?: string;
  margin?: 'none' | 'dense' | 'normal';
  onChange?: (e: SelectChangeEvent<any>) => void;
  onBlur?: (e: React.FocusEvent) => void;
} & SelectProps;

// ----------------------------------------------------------------------

const FormikSelectField: React.FC<Props> = ({
  formik,
  errorMap,
  required,
  field,
  helperText,
  label,
  sx,
  children,
  showNoneOption = false,
  showNoneCustomText = 'None',
  margin,
  onChange,
  onBlur,
  ...other
}) => {
  const { hasError, getErrorMessage } = useErrorHandler(errorMap);

  const generateHelperText = () => {
    return (
      getErrorMessage({ fieldName: field }) ?? formik.errors?.[field]?.toString() ?? helperText
    );
  };

  return (
    <FormControl
      error={hasError({ fieldName: field }) || !!formik.errors[field]}
      fullWidth={other.fullWidth ?? true}
      sx={sx}
      margin={margin ?? 'normal'}
    >
      <InputLabel id={`${field}-select-field`} required={required}>
        {label}
      </InputLabel>
      <Select
        margin={margin}
        variant={other.variant ?? 'outlined'}
        id={other.id}
        name={field}
        label={label}
        required={required}
        fullWidth={other.fullWidth ?? true}
        value={getNestedObject(formik?.values, field) ?? ''}
        onChange={(e) => {
          formik.setFieldValue(field, e.target.value);
          onChange && onChange(e);
        }}
        onBlur={(e) => {
          formik.handleBlur(e);
          onBlur && onBlur(e);
        }}
        error={
          hasError({ fieldName: field }) ||
          (Boolean(formik.errors[field]) && Boolean(formik.touched[field]))
        }
        sx={sx}
        {...other}
      >
        {showNoneOption && (
          <MenuItem key={''} value={undefined} disabled>
            {showNoneCustomText}
          </MenuItem>
        )}
        {children}
      </Select>
      {generateHelperText() && <FormHelperText>{generateHelperText()}</FormHelperText>}
    </FormControl>
  );
};

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

export default FormikSelectField;
