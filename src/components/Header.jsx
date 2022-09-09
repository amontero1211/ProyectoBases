import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import AppBar from '@mui/material/AppBar';

function Header() {
  return (
    <AppBar position="static" style={{ background: '#ce93d8' }}>
      <Box sx={{ display: 'flex', gap: 30 }}>
        <img src="src/pictures/Museo.png" alt="Museo de Arte Contemporaneo" height={100} width={100} className="logo" />
        <Box sx={{
          display: 'flex',
          gap: 2,
          marginTop: 3,
          marginBottom: 6,
          marginRight: 6,
        }}
        >
          <p> Welcome! Join us</p>
          <Button variant="contained" color="secondary">Register</Button>
          <Button variant="outlined" color="secondary">Log In</Button>
        </Box>
      </Box>
    </AppBar>
  );
}

export default Header;
