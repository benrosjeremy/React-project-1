import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

export default function SelectType({ setFontSIze, setfontColor }) {
  return (
    <>
      <Box sx={{ minWidth: 100 }}>
        <FormControl sx={{ m: 2, minWidth: 100 }}>
          <InputLabel>Size</InputLabel>
          <Select
            id="simple-select"
            label="type"
            onChange={(event) => setFontSIze(event.target.value)}
          >
            <MenuItem value="24px">10</MenuItem>
            <MenuItem value="28px">12</MenuItem>
            <MenuItem value="32px">14</MenuItem>
            <MenuItem value="40px">16</MenuItem>
          </Select>
        </FormControl>
      </Box>
      <Box sx={{ minWidth: 100 }}>
        <FormControl sx={{ m: 2, minWidth: 100 }}>
          <InputLabel>Color</InputLabel>
          <Select
            id="simple-select"
            label="type"
            onChange={(event) => setfontColor(event.target.value)}
          >
            <MenuItem value="white">⚪</MenuItem>
            <MenuItem value="red">🔴</MenuItem>
            <MenuItem value="blue">🔵</MenuItem>
            <MenuItem value="yellow">🟡</MenuItem>
            <MenuItem value="green">🟢</MenuItem>
          </Select>
        </FormControl>
      </Box>
    </>
  );
}
