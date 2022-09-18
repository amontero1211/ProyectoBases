import { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { useForm, Controller } from 'react-hook-form';
import Card from '@mui/material/Card';
import ComboBox from '@mui/material/Autocomplete';
import Skeleton from '@mui/material/Skeleton';
import axios from 'axios';
import Button from '../components/Button';
import Header from '../components/Header';
import '../App.css';

function Register() {
  const [isLoading, setLoading] = useState(false);
  const { handleSubmit, control } = useForm();

  const onSubmit = async (data) => {
    try {
      setLoading(true);
      axios.post('urldelendpointdelogin', data);
      setLoading(false);
    } catch (error) {
      alert(error);
      setLoading(false);
    }
  };

  return (
    <div className="App">
      <Header />
      <Box sx={{ marginTop: 15, textAlign: 'center' }}>
        <Card>
          <h1>Submit your personal info in order to register</h1>
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
                }}
              >
                <Controller
                  name="name"
                  control={control}
                  render={({ field: { onChange, value } }) => (
                    <TextField
                      onChange={onChange}
                      value={value}
                      id="name"
                      label="First and Last Name"
                    />
                  )}
                />
                <Controller
                  name="ID"
                  control={control}
                  render={({ field: { onChange, value } }) => (
                    <TextField
                      onChange={onChange}
                      value={value}
                      id="ID"
                      label="ID number"
                    />
                  )}
                />
                <Controller
                  name="email"
                  control={control}
                  render={({ field: { onChange, value } }) => (
                    <TextField
                      onChange={onChange}
                      value={value}
                      id="email"
                      label="Email"
                    />
                  )}
                />
                <Controller
                  name="user"
                  control={control}
                  render={({ field: { onChange, value } }) => (
                    <TextField
                      onChange={onChange}
                      value={value}
                      id="user"
                      label="User"
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
                {/* <h4>Your security questions</h4>
                <p>
                  In case you forgot your password, you might need to answer
                  this questions
                </p>
                <Controller
                  name="creditcardnumber"
                  control={control}
                  render={({ field: { onChange, value } }) => (
                    <TextField
                      onChange={onChange}
                      value={value}
                      id="creditcardnumber"
                      label="Number"
                    />
                  )}
                />
                <Controller
                  name="ExpDate"
                  control={control}
                  render={({ field: { onChange, value } }) => (
                    <TextField
                      onChange={onChange}
                      value={value}
                      id="ExpDate"
                      label="Expiration Date ex: MM/YY"
                    />
                  )}
                />
                <Controller
                  name="BackNumbers"
                  control={control}
                  render={({ field: { onChange, value } }) => (
                    <TextField
                      onChange={onChange}
                      value={value}
                      id="BackNumbers"
                      label="Numbers from the back of your card ex:XXX"
                    />
                  )}
                /> */}
                <h4>Your credit card info</h4>
                <Controller
                  name="creditcardnumber"
                  control={control}
                  render={({ field: { onChange, value } }) => (
                    <TextField
                      onChange={onChange}
                      value={value}
                      id="creditcardnumber"
                      label="Number"
                    />
                  )}
                />
                <Controller
                  name="ExpDate"
                  control={control}
                  render={({ field: { onChange, value } }) => (
                    <TextField
                      onChange={onChange}
                      value={value}
                      id="ExpDate"
                      label="Expiration Date ex: MM/YY"
                    />
                  )}
                />
                <Controller
                  name="BackNumbers"
                  control={control}
                  render={({ field: { onChange, value } }) => (
                    <TextField
                      onChange={onChange}
                      value={value}
                      id="BackNumbers"
                      label="Numbers from the back of your card ex:XXX"
                    />
                  )}
                />
                <p>
                  Additional info: You will be charge for 10$ monthly if you
                  subscribe
                </p>
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

export default Register;
