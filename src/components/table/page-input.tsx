import { FC } from 'react';

import TextField from '@mui/material/TextField';
import Autocomplete, { AutocompleteRenderInputParams } from '@mui/material/Autocomplete';

// ----------------------------------------------------------------------

type PageInputProps = {
  totalPages: number;
  currentPage: number;
  onChange: (page: number) => void;
};

const PageInput: FC<PageInputProps> = ({ totalPages, currentPage, onChange }) => {
  return (
    <Autocomplete
      disabled={totalPages === 0}
      disableClearable
      value={currentPage + 1}
      onChange={(_event, value) => {
        if (typeof value === 'number') {
          onChange(value - 1);
        }
      }}
      renderInput={(params: AutocompleteRenderInputParams) => (
        <TextField {...params} variant="outlined" size="small" />
      )}
      options={totalPages > 0 ? Array.from({ length: totalPages }, (_, i) => i + 1) : []}
      getOptionLabel={(option) => option.toString()}
      sx={{
        '.MuiOutlinedInput-root': {
          width: totalPages > 99 ? 120 : 80,
        },
      }}
    />
  );
};

export default PageInput;
