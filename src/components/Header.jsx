import Box from '@mui/material/Box';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import AppBar from '@mui/material/AppBar';

function Header() {
  return (
    <AppBar position="static" style={{ background: '#ce93d8' }}>
      <Box sx={{ display: 'flex', gap: 90 }}>
        <img
          src="src/pictures/Museo.png"
          alt="Museo de Arte Contemporaneo"
          height={100}
          width={100}
          className="logo"
        />
        <Box
          sx={{
            display: 'flex',
            gap: 2,
            marginTop: 5,
            marginBottom: 5,
          }}
        >
          <p> Welcome! Join us</p>
          <Button variant="contained" color="secondary">
            Register
          </Button>
          <Link to="/login">
            <Button variant="outlined" color="secondary">
              Log In
            </Button>
          </Link>
        </Box>
      </Box>
    </AppBar>
  );
}

export default Header;
