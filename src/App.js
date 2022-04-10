import { useEffect, useState } from 'react';
import ButtonAppBar from './components/ButtonAppBar';
import Covid from './components/Covid';
import Covid2 from './components/Covid2';
import { Box } from '@mui/system';

function App() {
  const [covidData, setCovidData] = useState();

  useEffect(() => {
    fetch('https://api.covidtracking.com/v2/us/daily.json')
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setCovidData(data);
      });
  }, []);

  return (
    <Box>
      <ButtonAppBar />
      <Covid covidData={covidData} />
      <Covid2 covidData={covidData} />
      <br />
      <Box sx={{ p: '40px' }}>by: Daniel Avzaradel</Box>
    </Box>
  );
}

export default App;
