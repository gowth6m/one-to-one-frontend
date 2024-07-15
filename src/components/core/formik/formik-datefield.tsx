import { FormikProps } from 'formik';
import useErrorHandler from '@/hooks/use-error-handler';
import { CoreApiError } from '@/services/responses.model';

import { SxProps } from '@mui/material';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateField, LocalizationProvider } from '@mui/x-date-pickers';

import { getNestedObject } from './formik-textfield';

// ----------------------------------------------------------------------

type Props = {
  formik: FormikProps<any>;
  field: string;
  label: string;
  required?: boolean;
  variant?: 'standard' | 'filled' | 'outlined';
  readOnly?: boolean;
  errorMap: CoreApiError[];
  helperText?: string;
  fullWidth?: boolean;
  disabled?: boolean;
  format?: string;
  InputProps?: any;
  sx?: SxProps;
  onChange?: (_e: any) => void;
  margin?: 'none' | 'dense' | 'normal';
};

const FormikDateField: React.FC<Props> = ({
  formik,
  field,
  label,
  required = false,
  variant = 'outlined',
  readOnly = false,
  errorMap,
  helperText,
  fullWidth = true,
  disabled = false,
  format = 'DD/MM/YYYY',
  InputProps,
  onChange,
  margin,
  sx,
  ...otherProps
}) => {
  const { hasError, getErrorMessage } = useErrorHandler(errorMap);

  const generateHelperText = () => {
    return (
      getErrorMessage({ fieldName: field }) ?? formik.errors?.[field]?.toString() ?? helperText
    );
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DateField
        margin={margin ?? 'normal'}
        format={format}
        fullWidth={fullWidth}
        required={required}
        variant={variant}
        inputProps={{ readOnly: readOnly }}
        name={field}
        label={label}
        disabled={disabled}
        value={getNestedObject(formik?.values, field)}
        onChange={(value) => {
          formik.setFieldValue(field, value);
          onChange?.(value);
        }}
        onBlur={formik.handleBlur}
        helperText={generateHelperText()}
        slotProps={{
          textField: {
            fullWidth: true,
            variant: 'outlined',
            error:
              hasError({ fieldName: field }) ||
              (Boolean(formik.errors[field]) && Boolean(formik.touched[field])),
          },
        }}
        sx={sx}
        InputProps={InputProps}
        {...otherProps}
      />
    </LocalizationProvider>
  );
};

export default FormikDateField;
