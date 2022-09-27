import Typography from '@mui/material/Typography';

const CardDescription = ({ children }) => (
  <Typography variant="h4" component="div" textAlign="left">
    {children}
  </Typography>
);

export default CardDescription;
