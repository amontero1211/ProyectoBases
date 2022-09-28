import '../App.css';
import axios from 'axios';
import { useEffect } from 'react';
import Box from '@mui/material/Box';
import Header from '../components/Header';
import Button from '../components/Button';
import ArtTitle from '../components/ArtTitle';
import ArtImagen from '../components/ArtImagen';
import Costo from '../components/Costo';
import CardDescription from '../components/CardDescription';
import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';

const URL = 'http://localhost:8000';

function ArtworkPage() {
  const [state, setState] = useState(useLocation().state);

  useEffect(() => {
    const getArtistInfo = async () => {
      const { data: artist } = await axios.get(
        `${URL}/artists/${state.artist_id}`
      );
      setState({ ...state, artist_id: artist });
    };
    getArtistInfo();
  }, []);

  console.log(state);

  return (
    <div className="App">
      <h1>Ver mas</h1>
      <Header />
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 6,
          marginLeft: 30,
          marginRight: 30,
          marginTop: 15,
          width: 1000,
          backgroundColor: '#ce93d8',
        }}
      >
        <Box sx={{ marginTop: 10 }}>
          <Link to={`/Autor/${state.artist_id.id}`}>
            <ArtTitle>{state.artist_id.name}</ArtTitle>
          </Link>
          <ArtTitle>{state.name}</ArtTitle>
        </Box>
        <Box
          sx={{
            marginTop: 5,
          }}
        >
          <ArtImagen
            pictureUrl={state.image}
            altText="Art"
            className="Tarjeta"
            sx={{ width: 500, height: 500 }}
          />
          <Box
            sx={{
              marginTop: 10,
              marginBottom: 10,
            }}
          >
            <Costo>{state.price}</Costo>
            <CardDescription>Genero: {state.genre}</CardDescription>
            <CardDescription>
              Fecha de Creacion: {state.create_date}
            </CardDescription>
            <CardDescription>Estado: {state.state}</CardDescription>
          </Box>
        </Box>
        <Box
          sx={{
            marginBottom: 10,
          }}
        >
          <Link to="/Direccionfactura">
            <Button size="large"> Comprar </Button>
          </Link>
        </Box>
      </Box>
    </div>
  );
}

export default ArtworkPage;
