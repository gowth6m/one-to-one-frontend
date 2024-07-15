import { FormikProps } from 'formik';
import StaticData from '@/utils/data';
import { FC, ChangeEvent } from 'react';
import useErrorHandler from '@/hooks/use-error-handler';
import { transformForTestLocator } from '@/utils/format';
import { CoreApiError } from '@/services/responses.model';

import { Box, SxProps, TextField, Autocomplete } from '@mui/material';

import { getNestedObject } from './formik-textfield';

// ----------------------------------------------------------------------

type Props = {
  id?: string;
  formik: FormikProps<any>;
  field: string;
  label?: string;
  required?: boolean;
  readOnly?: boolean;
  errorMap: CoreApiError[];
  helperText?: string;
  fullWidth?: boolean;
  defaultValue?: any;
  variant?: 'standard' | 'filled' | 'outlined';
  options?: {
    key: string;
    value: string;
  }[];
  margin?: 'none' | 'dense' | 'normal';
  sx?: SxProps;
  customOnChange?: (_event: ChangeEvent<any>) => void;
  defaultCurrency?: string;
  disableClearable?: boolean;
};

const FormikCurrencySelect: FC<Props> = ({
  id,
  formik,
  field,
  label = 'Choose a currency',
  required = false,
  variant = 'outlined',
  readOnly = false,
  errorMap,
  helperText,
  fullWidth = true,
  customOnChange,
  options,
  margin,
  sx,
  disableClearable = false,
  defaultCurrency,
  ...otherProps
}) => {
  const { hasError, getErrorMessage } = useErrorHandler(errorMap);

  const generateHelperText = () => {
    return (
      getErrorMessage({ fieldName: field }) ?? formik.errors?.[field]?.toString() ?? helperText
    );
  };

  return (
    <Autocomplete
      id={id ?? `currency-select-${transformForTestLocator(field)}`}
      fullWidth={fullWidth}
      value={
        defaultCurrency
          ? (options ?? StaticData.ALL_CURRENCIES).find((option) => option.key === defaultCurrency)
          : getNestedObject(formik.values, field)
            ? (options ?? StaticData.ALL_CURRENCIES).find(
                (option) => option.key === getNestedObject(formik.values, field)
              )
            : null
      }
      options={options ?? StaticData.ALL_CURRENCIES}
      autoHighlight
      getOptionLabel={(option) => option.value}
      readOnly={readOnly}
      onChange={(
        event: any,
        newValue: {
          key: string;
          value: string;
        } | null
      ) => {
        formik.setFieldValue(field, newValue ? newValue.key : '');
        customOnChange?.(event);
      }}
      disableClearable={disableClearable}
      onBlur={formik.handleBlur}
      autoComplete={false}
      sx={sx}
      renderOption={(props, option) => (
        <Box component="li" sx={{ '& > img': { mr: 2, flexShrink: 0 } }} {...props}>
          {option.value}
        </Box>
      )}
      renderInput={(params) => (
        <TextField
          {...params}
          margin={margin ?? 'normal'}
          variant={variant}
          label={label}
          inputProps={{
            ...params.inputProps,
            readOnly: readOnly,
            autoComplete: 'new-password', // disable autocomplete and autofill
          }}
          helperText={generateHelperText()}
          error={
            hasError({ fieldName: field }) ||
            (Boolean(formik.errors[field]) && Boolean(formik.touched[field]))
          }
          required={required}
        />
      )}
      {...otherProps}
    />
  );
};

export default FormikCurrencySelect;
