import Box from '@mui/material/Box';

function Welcome() {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        marginLeft: 30,
        marginRight: 30,
        marginTop: 8,
        marginBottom: 10,
      }}
    >
      <h1>Museo de Arte Contemporáneo</h1>
      <p>
        Exposicion en linea de las otras de arte de artistas reconocidos,
        adquiere una para apoyar a nuestros artistas!
      </p>
    </Box>
  );
}

export default Welcome;
