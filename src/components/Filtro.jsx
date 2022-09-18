import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';

const Filtro = ({ nameFilter, opciones, params, ...rest }) => (
  <Autocomplete
    disablePortal
    id={nameFilter}
    options={opciones}
    sx={{ width: 300, marginTop: 10, marginLeft: 120 }}
    renderInput={(params) => <TextField {...params} label="Choose" />}
    {...rest}
  />
);

export default Filtro;
