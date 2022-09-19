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

function PasswordForgot() {
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
                  mt: 10,
                  mb: 10,
                  alignContent: 'center',
                }}
              >
                <h2>Your security questions</h2>
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

                <Button type="submit">Enviar</Button>
              </Box>
            )}
          </form>
        </Card>
      </Box>
    </div>
  );
}

export default PasswordForgot;
