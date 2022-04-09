import React, { useEffect, useState } from 'react';
import { Box, Typography } from '@mui/material';
import LinearProgress from '@mui/material/LinearProgress';
import Plot from 'react-plotly.js';

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
    <Box sx={{ p: '40px' }}>
      <Typography variant="h5" component="h1">
        Covid-19
      </Typography>
      <br />
      <Box>Link: {covidData ? covidData.links.self : <LinearProgress />}</Box>
      <br />
      <br />
      <Plot
        data={[
          {
            x: [1, 13, 2, 5.4, 6, 9, 18],
            y: [2, 4, 1.2, 12, 6, 9],
            mode: 'markers',
            marker: {
              size: [60, 40, 60, 45, 30, 100],
              color: '#0066ff',
            },
            name: 'bubble',
          },
          {
            type: 'bar',
            name: 'bar',
            marker: {
              color: 'orange',
            },
            x: [10, 18, 31],
            y: [22, 15, 13],
          },
          {
            type: 'line',
            line: {
              width: 4,
              color: 'darkred',
            },
            name: 'line',
            marker: {
              color: 'darkred',
              line: {
                width: 4,
                color: 'darkred',
              },
            },
            x: [0, 9, 22, 36],
            y: [0, 6, 15, 20],
          },
        ]}
        layout={{
          width: '600px',
          height: 'auto',
          title: 'Covid Deaths',
          yaxis: { title: 'Y Axis' },
          xaxis: { title: 'X Axis' },
        }}
      />
    </Box>
  );
}

export default Covid;
