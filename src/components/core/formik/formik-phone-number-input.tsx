import { FormikProps } from 'formik';
import MuiPhoneNumber from 'mui-phone-number';
import { getNestedObject } from '@/utils/misc';
import useErrorHandler from '@/hooks/use-error-handler';
import { CoreApiError } from '@/services/responses.model';

// ----------------------------------------------------------------------------

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
  defaultCountry?: string;
  margin?: 'none' | 'dense' | 'normal';
  onChange?: (_e: any) => void;
};

const FormikPhoneNumberInput: React.FC<Props> = ({
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
  onChange,
  defaultCountry = 'gb',
  margin = 'normal',
  ...otherProps
}) => {
  const { hasError, getErrorMessage } = useErrorHandler(errorMap);

  const generateHelperText = () => {
    return (
      getErrorMessage({ fieldName: field }) ?? formik.errors?.[field]?.toString() ?? helperText
    );
  };

  return (
    <MuiPhoneNumber
      defaultCountry={defaultCountry}
      fullWidth={fullWidth}
      required={required}
      variant={variant}
      inputProps={{ readOnly: readOnly }}
      id={field}
      name={field}
      label={label}
      disabled={disabled}
      margin={margin}
      value={getNestedObject(formik?.values, field)}
      onChange={(e) => {
        formik.setFieldValue(field, e);
        onChange && onChange(e);
      }}
      onBlur={formik.handleBlur}
      helperText={generateHelperText()}
      error={
        hasError({ fieldName: field }) ||
        (Boolean(formik.errors[field]) && Boolean(formik.touched[field]))
      }
      {...otherProps}
    />
  );
};

export default FormikPhoneNumberInput;
