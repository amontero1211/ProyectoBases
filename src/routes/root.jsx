import '../App.css';
// import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Box } from '@mui/system';
import Header from '../components/Header';
import Welcome from '../components/Welcome';
import Artes from '../components/Artes';
import Filtro from '../components/Filtro';
import { set } from 'react-hook-form';
// import Slack from '@mui/material/Slack';
// import Autocomplete from '@mui/material/Autocomplete';
// import TextField from '@mui/material/TextField';

const opciones = ['The Godfather', 'Pulp Fiction'];
const url = 'http://127.0.0.1:8000';

export default function Root() {
  // const navigate = useNavigate();

  const [info, setInfo] = useState([]);

  useEffect(() => {
    const getInfo = async () => {
      const res = await axios.get(url);
      setInfo(res.data);
    };
    getInfo();
  }, []);

  return (
    <div className="App">
      <Header />
      <Welcome />
      <div className="Filtro">
        <Filtro options={opciones} />
      </div>
      <Box
        sx={{
          display: 'flex',
          gap: 3,
          marginLeft: 10,
          marginTop: 10,
        }}
      >
        {info.lenght === 0 && <p>Qlq?...</p>}
        {info.map((i) => (
          <Artes info={i} />
        ))}
      </Box>
    </div>
  );
}
