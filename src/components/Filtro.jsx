import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { useState, useEffect } from 'react';

export default function Filtro({ options, callback }) {
  const [value, setValue] = useState(options[0]);
  const [inputValue, setInputValue] = useState('');

  useEffect(() => {
    if (callback) {
      callback(value);
    }
  }, [value]);

  return (
    <div>
      <Autocomplete
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        inputValue={inputValue}
        onInputChange={(event, newInputValue) => {
          setInputValue(newInputValue);
        }}
        options={options}
        sx={{ width: 300 }}
        renderInput={(params) => <TextField {...params} label="Choose" />}
      />
    </div>
  );
}
