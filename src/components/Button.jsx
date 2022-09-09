import MuButton from '@mui/material/Button';
// wft am I doing this this children?
const Button = ({ children, ...rest }) => (
  <MuButton variant="contained" {...rest}>
    {children}
  </MuButton>
);

export default Button;
