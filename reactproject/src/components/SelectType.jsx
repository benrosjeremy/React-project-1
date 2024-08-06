import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function SelectType() {
  const [type, setType] = React.useState('');

  const handleChange = (event) => {
    setType(event.target.value);
  };

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl sx={{ m: 2, minWidth: 80 }}>
        <InputLabel id="demo-simple-select-label">type</InputLabel>
        <Select
          labelId="simple-select-label"
          id="simple-select"
          value={type}
          label="type"
          onChange={handleChange}
        >
          <MenuItem value="en">English</MenuItem>
          <MenuItem value="he">Hebrew</MenuItem>
          <MenuItem value="symbol">Symbol</MenuItem>
          <MenuItem value="emoji">Emoji</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}