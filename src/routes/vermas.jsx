import '../App.css';
import Box from '@mui/material/Box';
import Header from '../components/Header';
import Button from '../components/Button';
import ArtTitle from '../components/ArtTitle';
import ArtImagen from '../components/ArtImagen';
import Costo from '../components/Costo';
import CardDescription from '../components/CardDescription';
import { Link, useLocation } from 'react-router-dom';

function ArtworkPage() {
  const { state } = useLocation();

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
          width: 700,
          backgroundColor: '#ce93d8',
        }}
      >
        <Box sx={{ marginTop: 10 }}>
          <Link to={`/Autor/${state.artist_id}`}>
            <ArtTitle>{state.name}</ArtTitle>
          </Link>
        </Box>
        <Box
          sx={{
            marginTop: 5,
          }}
        >
          <ArtImagen
            pictureUrl="/src/pictures/Logo Museo.png"
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
            <CardDescription>Genre: {state.genre}</CardDescription>
            <CardDescription>Create date: {state.create_date}</CardDescription>
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
