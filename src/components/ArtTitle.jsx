import Typography from '@mui/material/Typography';

const ArtTitle = ({ children }) => (
  <Typography variant="h3" component="div" textAlign="center" color="secondary">
    {children}
  </Typography>
);

export default ArtTitle;
