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
      {covidData ? (
        <Box sx={{ border: '2px solid black' }}>
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
                name: `In ICU`,
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
                  color: '#001c63',
                },
                name: `On ventilator`,
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
                  color: '#333',
                },
                name: `Death change from prior day`,
              },
            ]}
            layout={{
              width: 1200,
              title: `Covid`,
              yaxis: {
                title: 'Total',
              },
              xaxis: {
                title: 'Date',
              },
              margin: {
                r: 200,
              },
              font: {
                size: 16,
              },
            }}
            useResizeHandler={true}
            style={{ width: '100%' }}
          />
        </Box>
      ) : (
        ''
      )}
    </Box>
  );
}

export default Covid;
