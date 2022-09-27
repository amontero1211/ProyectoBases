import '../App.css';
import Box from '@mui/material/Box';
import Header from '../components/Header';
import ArtTitle from '../components/ArtTitle';
import ArtImagen from '../components/ArtImagen';
import Costo from '../components/Costo';
import CardDescription from '../components/CardDescription';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const baseURL = 'http://127.0.0.1:8000';

function Root() {
  const { authorId } = useParams();

  const [data, setData] = useState(null);

  useEffect(() => {
    if (authorId) {
      const fetch = async () => {
        const { data: artistsData } = await axios.get(`${baseURL}/artists`);
        const artist = artistsData.find(({ id }) => id.toString() === authorId);
        setData(artist);
      };
      fetch();
    }
  }, [authorId]);

  if (!data) {
    return <h2>Cargando data</h2>;
  }

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
          <ArtTitle>{data.name}</ArtTitle>
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
            <Costo>{data.birth_date}</Costo>
            <Box sx={{ mt: 10 }}>
              <CardDescription>Nationality: {data.nationality}</CardDescription>
              <CardDescription>Biography: {data.biography}</CardDescription>
            </Box>
          </Box>
        </Box>
      </Box>
    </div>
  );
}

export default Root;
