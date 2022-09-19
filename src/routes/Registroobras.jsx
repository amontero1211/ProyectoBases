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

function Registroobras() {
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
          <h1>Add new art to our database</h1>
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
                  name="artname"
                  control={control}
                  render={({ field: { onChange, value } }) => (
                    <TextField
                      onChange={onChange}
                      value={value}
                      id="artname"
                      label="Art name"
                    />
                  )}
                />
                <Controller
                  name="autor"
                  control={control}
                  render={({ field: { onChange, value } }) => (
                    <TextField
                      onChange={onChange}
                      value={value}
                      id="autor"
                      label="Autor"
                    />
                  )}
                />
                <h3>Select the art type</h3>
                <Filtro id="arttype" options={opciones} />
                <Controller
                  name="Price"
                  control={control}
                  render={({ field: { onChange, value } }) => (
                    <TextField
                      onChange={onChange}
                      value={value}
                      id="price"
                      label="Price"
                    />
                  )}
                />
                <Controller
                  name="creationdate"
                  control={control}
                  render={({ field: { onChange, value } }) => (
                    <TextField
                      onChange={onChange}
                      value={value}
                      id="creationdate"
                      label="Creation Date"
                    />
                  )}
                />
                <Controller
                  name="features"
                  control={control}
                  render={({ field: { onChange, value } }) => (
                    <TextField
                      onChange={onChange}
                      value={value}
                      id="features"
                      label="Features/additional info"
                    />
                  )}
                />
                <Button type="submit">Send</Button>
              </Box>
            )}
          </form>
        </Card>
      </Box>
    </div>
  );
}

export default Registroobras;
