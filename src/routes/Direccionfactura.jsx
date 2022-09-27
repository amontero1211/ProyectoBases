import '../App.css';
// import { useNavigate } from 'react-router-dom';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { useForm, Controller } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import Card from '@mui/material/Card';
import Skeleton from '@mui/material/Skeleton';
import axios from 'axios';
import Welcomeheader from '../components/welcomeheader';
import Welcome from '../components/Welcome';
import Button from '../components/Button';
// import Slack from '@mui/material/Slack';
// import Autocomplete from '@mui/material/Autocomplete';
// import TextField from '@mui/material/TextField';

function Direccionfactura() {
  const [isLoading, setLoading] = useState(false);
  const { handleSubmit, control } = useForm();

  const onSubmit = async (data) => {
    try {
      setLoading(true);
      await axios.post('urldelendpointdelogin', data);
      setLoading(false);
    } catch (error) {
      alert(error);
      setLoading(false);
    }
  };

  return (
    <div className="App">
      <Welcomeheader />
      <Welcome />
      <Box sx={{ marginTop: 15 }}>
        <Card>
          <form onSubmit={handleSubmit(onSubmit)}>
            {isLoading ? (
              <Skeleton variant="circular" width={40} height={40} />
            ) : (
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  maxWidth: 400,
                  gap: 3,
                  m: 'auto',
                  mt: 3,
                  mb: 3,
                  alignContent: 'center',
                }}
              >
                <h2>Submit your adress and we will contact you!</h2>
                <Controller
                  name="Direccion"
                  control={control}
                  render={({ field: { onChange, value } }) => (
                    <TextField
                      onChange={onChange}
                      value={value}
                      id="direccion"
                      label="Complete Adress"
                    />
                  )}
                />
                <Box
                  sx={{
                    ml: 20,
                  }}
                >
                  <Link to="/Factura">
                    <Button type="submit">Enviar</Button>
                  </Link>
                </Box>
              </Box>
            )}
          </form>
        </Card>
      </Box>
    </div>
  );
}

export default Direccionfactura;
