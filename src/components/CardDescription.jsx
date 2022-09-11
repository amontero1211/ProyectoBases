import Typography from '@mui/material/Typography';

const CardDescription = ({ children }) => (
  <Typography variant="body2" component="div" textAlign="left">
    {children}
  </Typography>
);

export default CardDescription;
