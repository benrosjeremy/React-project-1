import * as React from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import { charsArrys } from "./charsArrys";

export default function RadioButtonsGroup({ language, setLanguage }) {
  const [value, setValue] = React.useState(charsArrys.en);

  const handleChange = (event) => {
    setValue(event.target.value);
    // const arr =[...event.target.value]
    // setLanguage(arr);
    // console.log(arr);
    
  };

  return (
    <FormControl>
      <FormLabel id="controlled-radio-buttons-group"></FormLabel>
      <RadioGroup
        row
        aria-labelledby="controlled-radio-buttons-group"
        name="controlled-radio-buttons-group"
        value={value}
        onChange={handleChange}
      >
        <FormControlLabel
          value={charsArrys.en}
          control={<Radio />}
          label="English"
        />
        <FormControlLabel
          value={charsArrys.he}
          control={<Radio />}
          label="Hebrew"
        />
        <FormControlLabel
          value={charsArrys.special}
          control={<Radio />}
          label="Symbol"
        />
        <FormControlLabel
          value={charsArrys.emoji}
          control={<Radio />}
          label="Emoji"
        />
        <FormControlLabel
          value={charsArrys.numbers}
          control={<Radio />}
          label="Numbers"
        />
      </RadioGroup>
    </FormControl>
  );
}
