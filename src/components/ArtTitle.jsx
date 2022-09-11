import Typography from '@mui/material/Typography';

const ArtTitle = ({ children }) => (
  <Typography variant="h5" component="div" textAlign="center" color="primary">
    {children}
  </Typography>
);

export default ArtTitle;
