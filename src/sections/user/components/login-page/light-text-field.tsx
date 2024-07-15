import styled from '@emotion/styled';

import { TextField } from '@mui/material';

const LightTextField = ({ ...props }) => {
  return (
    <LightBorderTextField
      margin="dense"
      variant="outlined"
      required
      fullWidth
      {...props}
      color="primary"
      InputLabelProps={{
        required: false,
      }}
      InputProps={props.InputProps}
    />
  );
};

const LightBorderTextField = styled(TextField)`
  & .MuiOutlinedInput-root {
    overflow: hidden;
    & fieldset {
      border-color: white;
    }
    &:hover fieldset {
      border-color: white;
    }
    &.Mui-focused fieldset {
      border-color: white;
    }
    & input {
      color: white;

      &:-webkit-autofill,
      &:-webkit-autofill:hover,
      &:-webkit-autofill:focus,
      &:-webkit-autofill:active {
        boxshadow: 0 0 0 30px #c4cdd5 inset !important;
        textfillcolor: #f5f5f5 !important;
        border: none !important;
        outline: none !important;
        borderradius: 0 !important;
      }
    }
  }

  & .MuiInputLabel-root {
    color: white;
    &.Mui-focused {
      color: white;
    }
  }

  & .MuiFormHelperText-root {
    color: white;
  }
`;

export { LightTextField };
