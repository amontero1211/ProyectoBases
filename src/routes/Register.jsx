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

const URL = 'http://localhost:8000/api';

function Register() {
  const [isLoading, setLoading] = useState(false);
  const { handleSubmit, control } = useForm();
  // const [data, setData] = useState();

  const onSubmit = async (data) => {
    try {
      setLoading(true);
      await axios.post(`${URL}/purchaser/`, data);
      console.log({ data });
      const req = await axios.post('', data);
      console.log({ req });
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
                {/* // <Controller
                //   name="id"
                //   control={control}
                //   render={({ field: { onChange, value } }) => (
                //     <TextField
                //       onChange={onChange}
                //       value={value}
                //       id="ID"
                //       label="ID number"
                //     />
                //   )}
                // /> */}
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
                  name="username"
                  control={control}
                  render={({ field: { onChange, value } }) => (
                    <TextField
                      onChange={onChange}
                      value={value}
                      id="username"
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
                <Controller
                  name="question_1"
                  control={control}
                  render={({ field: { onChange, value } }) => (
                    <TextField
                      onChange={onChange}
                      value={value}
                      id="question_1"
                      label="First Question"
                    />
                  )}
                />
                <Controller
                  name="answer_1"
                  control={control}
                  render={({ field: { onChange, value } }) => (
                    <TextField
                      onChange={onChange}
                      value={value}
                      id="answer_1"
                      label="First Answer"
                    />
                  )}
                />
                <Controller
                  name="question_2"
                  control={control}
                  render={({ field: { onChange, value } }) => (
                    <TextField
                      onChange={onChange}
                      value={value}
                      id="question_2"
                      label="Second Question"
                    />
                  )}
                />
                <Controller
                  name="answer_2"
                  control={control}
                  render={({ field: { onChange, value } }) => (
                    <TextField
                      onChange={onChange}
                      value={value}
                      id="answer_2"
                      label="Second Answer"
                    />
                  )}
                />
                <Controller
                  name="question_3"
                  control={control}
                  render={({ field: { onChange, value } }) => (
                    <TextField
                      onChange={onChange}
                      value={value}
                      id="question_3"
                      label="Third Answer"
                    />
                  )}
                />
                <Controller
                  name="answer_3"
                  control={control}
                  render={({ field: { onChange, value } }) => (
                    <TextField
                      onChange={onChange}
                      value={value}
                      id="answer_3"
                      label="Third Answer"
                    />
                  )}
                />
                <h4>Your credit card info</h4>
                <Controller
                  name="card_number"
                  control={control}
                  render={({ field: { onChange, value } }) => (
                    <TextField
                      onChange={onChange}
                      value={value}
                      id="card_number"
                      label="Number"
                    />
                  )}
                />
                <Controller
                  name="card_expiration_date"
                  control={control}
                  render={({ field: { onChange, value } }) => (
                    <TextField
                      onChange={onChange}
                      value={value}
                      id="card_expiration_date"
                      label="Expiration Date ex: MM/YY"
                    />
                  )}
                />
                <Controller
                  name="card_back_number"
                  control={control}
                  render={({ field: { onChange, value } }) => (
                    <TextField
                      onChange={onChange}
                      value={value}
                      id="card_back_number"
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
        </Card>
      </Box>
    </div>
  );
}

export default Register;
