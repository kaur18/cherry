import * as React from 'react';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { Card, CardContent } from '@mui/material';
import { Typography } from '@mui/material';
import { useState } from 'react'
const label = { inputProps: { 'aria-label': 'Checkbox' } };

const GenEdSelector = () => {
  const [geneds, setGenEds] = useState({
    "Advanced Composition": false,
    "Western/Comparative Culture": false,
    "Non-Western Culture": false,
    "US Minority Culture": false,
    "Humanities and the Arts ": false,
    "Natural Science and Technology": false,
    "Quantitative Reasoning": false,
    "Social and Behavioral Sciences": false
  });

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

  const checkBoxUpdate = (genedName) => {
    return (event) => {
      geneds[genedName] = event.target.checked;
      console.log(geneds);
    }
  }

  return (
    <Card sx={{ margin: 2 }}>
      <CardContent>
        <Typography sx={{ fontSize: 20 }} color="text.primary" gutterBottom>
          Gen Eds
        </Typography>
        <FormGroup>
          { genEds.map(genEd =>
            <FormControlLabel control={<Checkbox />} label={genEd} onChange={checkBoxUpdate(genEd)} checked={geneds.genEd}/>
          )}
        </FormGroup>
      </CardContent>
    </Card>

  );
}

export default GenEdSelector