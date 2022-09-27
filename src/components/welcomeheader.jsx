import Box from '@mui/material/Box';
import { Link } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Avatar from '@mui/material/Avatar';
import { deepPurple } from '@mui/material/colors';

function Welcomeheader() {
  return (
    <AppBar position="static" style={{ background: '#ce93d8' }}>
      <Box sx={{ display: 'flex', gap: 90 }}>
        <Link to="/">
          <img
            src="src/pictures/Museo.png"
            alt="Museo de Arte Contemporaneo"
            height={100}
            width={100}
            className="logo"
          />
        </Link>
        <Box
          sx={{
            display: 'flex',
            gap: 2,
            marginTop: 5,
            marginBottom: 5,
            mr: 5,
          }}
        >
          <p> Welcome! Join us</p>
          <Avatar sx={{ bgcolor: deepPurple[500] }}>hi</Avatar>
        </Box>
      </Box>
    </AppBar>
  );
}

export default Welcomeheader;
