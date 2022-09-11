import MuButton from '@mui/material/Button';

const Button = ({ children, ...rest }) => (
  <MuButton variant="contained" {...rest} color="secondary">
    {children}
  </MuButton>
);

export default Button;
