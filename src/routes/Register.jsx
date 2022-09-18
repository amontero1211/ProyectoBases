import { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { useForm, Controller } from 'react-hook-form';
import Card from '@mui/material/Card';
import Skeleton from '@mui/material/Skeleton';
import axios from 'axios';
import Button from '../components/Button';
import Header from '../components/Header';
import Filtro from '../components/Filtro';
import '../App.css';

const opciones = ['Opcion 1', 'Opcion 2'];

function Register() {
  const [isLoading, setLoading] = useState(false);
  const { handleSubmit, control } = useForm();

  const onSubmit = async (data) => {
    try {
      setLoading(true);
      await axios.post('urldelendpointderegister', data);
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
                      id="password"
                      label="Password"
                      type="password"
                    />
                  )}
                />
                <h4>Your security questions</h4>
                <p>
                  In case you forgot your password, you might need to answer
                  this questions
                </p>
                <Filtro id="preguntas1" options={opciones} />
                <Controller
                  name="pregunta1"
                  control={control}
                  render={({ field: { onChange, value } }) => (
                    <TextField
                      onChange={onChange}
                      value={value}
                      id="pregunta1"
                      label="First Answer"
                    />
                  )}
                />
                <Filtro id="preguntas2" options={opciones} />
                <Controller
                  name="pregunta2"
                  control={control}
                  render={({ field: { onChange, value } }) => (
                    <TextField
                      onChange={onChange}
                      value={value}
                      id="pregunta2"
                      label="Second Answer"
                    />
                  )}
                />
                <Filtro id="preguntas3" options={opciones} />
                <Controller
                  name="pregunta3"
                  control={control}
                  render={({ field: { onChange, value } }) => (
                    <TextField
                      onChange={onChange}
                      value={value}
                      id="pregunta3"
                      label="Third Answer"
                    />
                  )}
                />
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
