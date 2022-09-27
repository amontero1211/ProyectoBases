import Box from '@mui/material/Box';
import { useNavigate } from 'react-router-dom';
// import { useEffect } from 'react';
import Button from './Button';
import ArtTitle from './ArtTitle';
import ArtImagen from './ArtImagen';
import CardArt from './CardArt';
import CardDescription from './CardDescription';
import '../App.css';
// import { Children } from 'react';

export default function Artes({ info }) {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        display: 'flex',
        gap: 3,
        marginLeft: 10,
        marginTop: 10,
      }}
    >
      <CardArt>
        <ArtTitle>{info.name}</ArtTitle>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            marginTop: 4,
            marginBottom: 4,
            marginLeft: 5,
            marginRight: 5,
            width: 300,
          }}
        >
          <ArtImagen
            // TODO: Reparar info.image
            // pictureUrl={info.image}
            pictureUrl="/src/pictures/Logo Museo.png"
            altText="Art"
            className="Tarjeta"
          />
        </Box>
        <CardDescription>
          Precio:
          {info.price}
        </CardDescription>
        <Box
          sx={{
            marginTop: 4,
            marginLeft: 12,
          }}
        >
          <Button
            onClick={() => {
              navigate('/vermas', { state: info });
            }}
            sx={{
              display: 'flex',
              ml: 6,
            }}
          >
            Ver mas
          </Button>
        </Box>
      </CardArt>
    </Box>
  );
}
