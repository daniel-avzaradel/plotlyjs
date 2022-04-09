import ButtonAppBar from './components/ButtonAppBar';
import Covid from './components/Covid';
import { Box } from '@mui/system';

function App() {
  return (
    <Box>
      <ButtonAppBar />
      <Covid />
      <br />
      <Box sx={{ p: '40px' }}>by: Daniel Avzaradel</Box>
    </Box>
  );
}

export default App;
