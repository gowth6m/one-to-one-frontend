import { FormikProps } from 'formik';
import StaticData from '@/utils/data';
import { FC, ChangeEvent } from 'react';
import useErrorHandler from '@/hooks/use-error-handler';
import { CoreApiError } from '@/services/responses.model';

import { Box, SxProps, TextField, Autocomplete } from '@mui/material';

import { getNestedObject } from './formik-textfield';

// ----------------------------------------------------------------------

type Props = {
  isoType?: 2 | 3;
  id?: string;
  formik: FormikProps<any>;
  field: string;
  label?: string;
  required?: boolean;
  readOnly?: boolean;
  errorMap: CoreApiError[];
  helperText?: string;
  fullWidth?: boolean;
  variant?: 'standard' | 'filled' | 'outlined';
  sx?: SxProps;
  margin?: 'none' | 'dense' | 'normal';
  customOnChange?: (_event: ChangeEvent<any>) => void;
  disableClearable?: boolean;
};

const FormikCountrySelect: FC<Props> = ({
  isoType = 2,
  id,
  formik,
  field,
  label = 'Choose a country',
  required = false,
  variant = 'outlined',
  readOnly = false,
  errorMap,
  helperText,
  fullWidth = true,
  sx,
  customOnChange,
  margin,
  disableClearable = false,
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
      id={id ?? `country-select`}
      fullWidth={fullWidth}
      value={
        getNestedObject(formik.values, field)
          ? StaticData.COUNTRY_LIST_ALL_ISO.find((option) => {
              const isoCode = isoType === 2 ? option.code : option.code3;

              return isoCode === getNestedObject(formik.values, field);
            })
          : null
      }
      options={StaticData.COUNTRY_LIST_ALL_ISO}
      autoHighlight
      getOptionLabel={(option) => option.label}
      readOnly={readOnly}
      autoComplete={false}
      onChange={(
        event: any,
        newValue: {
          code: string;
          code3: string;
          label: string;
          number: string;
        } | null
      ) => {
        const isoCode = isoType === 2 ? newValue?.code : newValue?.code3;
        formik.setFieldValue(field, newValue ? isoCode : '');
        if (customOnChange) customOnChange(event);
      }}
      disableClearable={disableClearable}
      onBlur={formik.handleBlur}
      sx={sx}
      renderOption={(props, option) => (
        <Box component="li" sx={{ '& > img': { mr: 2, flexShrink: 0 } }} {...props}>
          <img
            loading="lazy"
            width="20"
            srcSet={`https://flagcdn.com/w40/${option.code.toLowerCase()}.png 2x`}
            src={`https://flagcdn.com/w20/${option.code.toLowerCase()}.png`}
            alt=""
          />
          {option.label} ({isoType === 2 ? option.code : option.code3})
        </Box>
      )}
      renderInput={(params) => (
        <TextField
          {...params}
          variant={variant}
          label={label}
          inputProps={{
            ...params.inputProps,
            readOnly: readOnly,
            autoComplete: 'new-password', // disable autocomplete and autofill
          }}
          margin={margin ?? 'normal'}
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

export default FormikCountrySelect;
