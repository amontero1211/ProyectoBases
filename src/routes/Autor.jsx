import '../App.css';
import Box from '@mui/material/Box';
import Header from '../components/Header';
import ArtTitle from '../components/ArtTitle';
import ArtImagen from '../components/ArtImagen';
import Costo from '../components/Costo';
import CardDescription from '../components/CardDescription';

function Root() {
  return (
    <div className="App">
      <h1>Ver mas</h1>
      <Header />
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 3,
          marginLeft: 30,
          marginRight: 30,
          marginTop: 15,
          width: 700,
          backgroundColor: '#ce93d8',
        }}
      >
        <Box sx={{ marginTop: 10 }}>
          <ArtTitle>Anya</ArtTitle>
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
            <Costo>Alala</Costo>
            <CardDescription>Fuaaa</CardDescription>
          </Box>
        </Box>
      </Box>
    </div>
  );
}

export default Root;
