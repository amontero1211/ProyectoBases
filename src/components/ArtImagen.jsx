import Avatar from '@mui/material/Avatar';

const Icon = ({ pictureUrl, altText, ...rest }) => (
  <Avatar
    alt={altText}
    src={pictureUrl}
    sx={{ width: 200, height: 200 }}
    variant="square"
    {...rest}
  />
);

export default Icon;
