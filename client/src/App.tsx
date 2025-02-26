import { Box, Container } from '@mui/material';
import { Form } from './components';

function App(): JSX.Element {
  return (
    <>
      <Container maxWidth="sm">
        <Box sx={{ my: 4 }}>
          <h1>ReCAPTCHA In React</h1>
          <Form />
        </Box>
      </Container>
    </>
  );
}

export default App;
