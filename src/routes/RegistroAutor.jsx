import { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import { useForm, Controller } from 'react-hook-form';
import Card from '@mui/material/Card';
import Skeleton from '@mui/material/Skeleton';
import axios from 'axios';
import Button from '../components/Button';
import Header from '../components/Header';

import '../App.css';

function Registroautor() {
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
          <h1>Add new autor to our database</h1>
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
                  name="autorname"
                  control={control}
                  render={({ field: { onChange, value } }) => (
                    <TextField
                      onChange={onChange}
                      value={value}
                      id="autorname"
                      label="Autor name"
                    />
                  )}
                />
                <Controller
                  name="birthdate"
                  control={control}
                  render={({ field: { onChange, value } }) => (
                    <TextField
                      onChange={onChange}
                      value={value}
                      id="birthdate"
                      label="Birth Date"
                    />
                  )}
                />
                <Controller
                  name="nationality"
                  control={control}
                  render={({ field: { onChange, value } }) => (
                    <TextField
                      onChange={onChange}
                      value={value}
                      id="nationality"
                      label="Nationality"
                    />
                  )}
                />
                <Controller
                  name="autoradditionalinfo"
                  control={control}
                  render={({ field: { onChange, value } }) => (
                    <TextField
                      onChange={onChange}
                      value={value}
                      id="autoradditionalinfo"
                      label="Autor additional info"
                    />
                  )}
                />
                <Button variant="contained" component="label">
                  Upload picture
                  <input hidden accept="image/*" multiple type="file" />
                </Button>
                <Button type="submit">Send</Button>
              </Box>
            )}
          </form>
        </Card>
      </Box>
    </div>
  );
}

export default Registroautor;
