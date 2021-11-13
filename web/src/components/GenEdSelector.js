import * as React from 'react';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { Card, CardContent } from '@mui/material';
import { Typography } from '@mui/material';

const label = { inputProps: { 'aria-label': 'Checkbox' } };

const GenEdSelector = () => {
  const genEds = [
    "Advanced Composition",
    "Western/Comparative Culture",
    "Non-Western Culture",
    "US Minority Culture",
    "Humanities and the Arts ",
    "Natural Science and Technology",
    "Quantitative Reasoning",
    "Social and Behavioral Sciences"
  ]

  return (
    <Card sx={{ margin: 2 }}>
      <CardContent>
        <Typography sx={{ fontSize: 20 }} color="text.primary" gutterBottom>
          Gen Eds
        </Typography>
        <FormGroup>
          { genEds.map(genEd =>
            <FormControlLabel control={<Checkbox />} label={genEd} />
          )}
        </FormGroup>
      </CardContent>
    </Card>

  );
}

export default GenEdSelector