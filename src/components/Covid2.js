import React from 'react';
import { Box } from '@mui/material';
import Plot from 'react-plotly.js';

function Covid2(props) {
  const { covidData } = props;
  console.log(covidData);

  return (
    <Box sx={{ p: '0 40px' }}>
      {covidData ? (
        <Plot
          data={[
            {
              //   x: [1, 2, 3],
              //   y: [1, 2, 3],
              x: covidData.data.map((item) => item.date),
              y: covidData.data.map((item) => item.cases.total.value),
              type: 'bar',
              mode: 'markers',
              marker: {
                color: '#0066ff',
              },
              name: 'Test',
            },
          ]}
          layout={{
            title: '',
            yaxis: {
              title: 'No. of Cases',
            },
            plot_bgcolor: '#e2e2e2',
            xaxis: {
              title: 'Date',
            },
            font: {
              size: 16,
            },
          }}
          useResizeHandler={true}
          style={{ width: '90vw' }}
        />
      ) : (
        ''
      )}
    </Box>
  );
}

export default Covid2;
