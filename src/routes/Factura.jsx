import '../App.css';
// import { useNavigate } from 'react-router-dom';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Welcomeheader from '../components/welcomeheader';
import Button from '../components/Button';
// import Slack from '@mui/material/Slack';
// import Autocomplete from '@mui/material/Autocomplete';
// import TextField from '@mui/material/TextField';

function Factura() {
  return (
    <div className="App">
      <Welcomeheader />
      <Box sx={{ mt: 15 }}>
        <Card>
          <Box sx={{ ml: 50 }}>
            <Box sx={{ ml: 10 }}>
              <h2>Details</h2>
            </Box>
            <h2>Contact info</h2>
            <h4>Name: </h4>
            <h4>Email: </h4>
            <h4>Adress: </h4>
            <h4>Card Number: </h4>
            <h3>Art Name: </h3>
            <h3>Sold on: </h3>
            <h3>Price: </h3>
            <h3>IVA 7%: </h3>
            <h2>Total Amount: </h2>
          </Box>
          <Box sx={{ mb: 10, mt: 5, ml: 55 }}>
            <Button type="submit">Confirm purchase</Button>
          </Box>
        </Card>
      </Box>
    </div>
  );
}

export default Factura;
