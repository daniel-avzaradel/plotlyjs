import React, { useEffect, useState } from 'react';
import { Box, Typography } from '@mui/material';
import CircularProgress from '@mui/material/CircularProgress';

function Covid() {
  const [covidData, setCovidData] = useState();

  useEffect(() => {
    fetch('https://api.covidtracking.com/v2/us/daily.json')
      .then((res) => res.json())
      .then((data) => {
        setCovidData(data);
        console.log(data);
      });

    console.log(covidData);
  }, []);
  return (
    <Box sx={{ p: '20px' }}>
      <Typography variant="h6" component="h1">
        Covid-19
      </Typography>
      <Box sx={{ p: '20px' }}>
        {covidData ? <p>Covid-19 Data</p> : <CircularProgress disableShrink />}
      </Box>
    </Box>
  );
}

export default Covid;
