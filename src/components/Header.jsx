import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';

function Header() {
  return (
    <Box sx={{ display: 'flex', gap: 30 }}>
      <Avatar alt="Museo de Arte Contemporaneo" src="src/pictures/Logo Museo.png" sx={{ width: 100, height: 100 }} />
      <Box sx={{
        display: 'flex',
        gap: 2,
        marginTop: 3,
        marginBottom: 6,
      }}
      >
        <p> Welcome! Join us</p>
        <Button variant="contained" color="secondary">Register</Button>
        <Button variant="outlined" color="secondary">Log In</Button>
      </Box>
    </Box>
  );
}

export default Header;
