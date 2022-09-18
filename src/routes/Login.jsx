import { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { useForm, Controller } from 'react-hook-form';
import Card from '@mui/material/Card';
import Skeleton from '@mui/material/Skeleton';
import axios from 'axios';
import Button from '../components/Button';
import Header from '../components/Header';
import '../App.css';

function Login() {
  const [isLoading, setLoading] = useState(false);
  const { handleSubmit, control } = useForm();

  const onSubmit = async (data) => {
    console.log('pene', data);
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
      <Header />
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
                  mt: 5,
                  mb: 3,
                  marginTop: 15,
                }}
              >
                <Controller
                  name="user"
                  control={control}
                  render={({ field: { onChange, value } }) => (
                    <TextField
                      onChange={onChange}
                      value={value}
                      id="user"
                      label="Usuario"
                    />
                  )}
                />
                <Controller
                  name="password"
                  control={control}
                  render={({ field: { onChange, value } }) => (
                    <TextField
                      onChange={onChange}
                      value={value}
                      id="user"
                      label="Password"
                      type="password"
                    />
                  )}
                />

                <Button type="submit">Enviar</Button>
              </Box>
            )}
          </form>
          <Box sx={{ display: 'flex', marginLeft: 58, mb: 5 }}>
            <h3>Did you forgot your password?</h3>
          </Box>
        </Card>
      </Box>
    </div>
  );
}

export default Login;
