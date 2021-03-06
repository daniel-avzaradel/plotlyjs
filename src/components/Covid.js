import React from 'react';
import { Box, Typography } from '@mui/material';
import LinearProgress from '@mui/material/LinearProgress';
import Plot from 'react-plotly.js';

function Covid(props) {
  const { covidData } = props;
  console.log(covidData);

  return (
    <Box sx={{ p: '40px' }}>
      <Typography variant='h5' component='h1'>
        Covid-19
      </Typography>
      <br />
      <Box>Link: {covidData ? covidData.links.self : <LinearProgress />}</Box>
      <br />
      <br />
      {covidData ? (
        <Box>
          <Plot
            data={[
              {
                x: [
                  covidData.data[0].date,
                  covidData.data[1].date,
                  covidData.data[2].date,
                  covidData.data[3].date,
                  covidData.data[4].date,
                  covidData.data[5].date,
                  covidData.data[6].date,
                  covidData.data[7].date,
                  covidData.data[8].date,
                  covidData.data[9].date,
                ],
                y: [
                  covidData.data[0].outcomes.hospitalized.in_icu.currently
                    .value,
                  covidData.data[1].outcomes.hospitalized.in_icu.currently
                    .value,
                  covidData.data[2].outcomes.hospitalized.in_icu.currently
                    .value,
                  covidData.data[3].outcomes.hospitalized.in_icu.currently
                    .value,
                  covidData.data[4].outcomes.hospitalized.in_icu.currently
                    .value,
                  covidData.data[5].outcomes.hospitalized.in_icu.currently
                    .value,
                  covidData.data[6].outcomes.hospitalized.in_icu.currently
                    .value,
                  covidData.data[7].outcomes.hospitalized.in_icu.currently
                    .value,
                  covidData.data[8].outcomes.hospitalized.in_icu.currently
                    .value,
                  covidData.data[9].outcomes.hospitalized.in_icu.currently
                    .value,
                ],
                type: 'bar',
                mode: 'markers',
                marker: {
                  color: '#0066ff',
                },
                name: `Hospitalized in ICU`,
              },
              {
                x: [
                  covidData.data[0].date,
                  covidData.data[1].date,
                  covidData.data[2].date,
                  covidData.data[3].date,
                  covidData.data[4].date,
                  covidData.data[5].date,
                  covidData.data[6].date,
                  covidData.data[7].date,
                  covidData.data[8].date,
                  covidData.data[9].date,
                ],
                y: [
                  covidData.data[0].outcomes.hospitalized.on_ventilator
                    .currently.value,
                  covidData.data[1].outcomes.hospitalized.on_ventilator
                    .currently.value,
                  covidData.data[2].outcomes.hospitalized.on_ventilator
                    .currently.value,
                  covidData.data[3].outcomes.hospitalized.on_ventilator
                    .currently.value,
                  covidData.data[4].outcomes.hospitalized.on_ventilator
                    .currently.value,
                  covidData.data[5].outcomes.hospitalized.on_ventilator
                    .currently.value,
                  covidData.data[6].outcomes.hospitalized.on_ventilator
                    .currently.value,
                  covidData.data[7].outcomes.hospitalized.on_ventilator
                    .currently.value,
                  covidData.data[8].outcomes.hospitalized.on_ventilator
                    .currently.value,
                  covidData.data[9].outcomes.hospitalized.on_ventilator
                    .currently.value,
                ],
                type: 'bar',
                mode: 'markers',
                marker: {
                  color: '#00d4aa',
                },
                name: `Hospitalized on ventilator`,
              },
              {
                x: [
                  covidData.data[0].date,
                  covidData.data[1].date,
                  covidData.data[2].date,
                  covidData.data[3].date,
                  covidData.data[4].date,
                  covidData.data[5].date,
                  covidData.data[6].date,
                  covidData.data[7].date,
                  covidData.data[8].date,
                  covidData.data[9].date,
                ],
                y: [
                  covidData.data[0].outcomes.death.total.calculated
                    .change_from_prior_day,
                  covidData.data[1].outcomes.death.total.calculated
                    .change_from_prior_day,
                  covidData.data[2].outcomes.death.total.calculated
                    .change_from_prior_day,
                  covidData.data[3].outcomes.death.total.calculated
                    .change_from_prior_day,
                  covidData.data[4].outcomes.death.total.calculated
                    .change_from_prior_day,
                  covidData.data[5].outcomes.death.total.calculated
                    .change_from_prior_day,
                  covidData.data[6].outcomes.death.total.calculated
                    .change_from_prior_day,
                  covidData.data[7].outcomes.death.total.calculated
                    .change_from_prior_day,
                  covidData.data[8].outcomes.death.total.calculated
                    .change_from_prior_day,
                  covidData.data[9].outcomes.death.total.calculated
                    .change_from_prior_day,
                ],
                type: 'bar',
                mode: 'markers',
                marker: {
                  color: 'orange',
                },
                name: `Death change from prior day`,
              },
            ]}
            layout={{
              title: `Covid`,
              yaxis: {
                title: 'Total',
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
        </Box>
      ) : (
        ''
      )}
    </Box>
  );
}

export default Covid;
