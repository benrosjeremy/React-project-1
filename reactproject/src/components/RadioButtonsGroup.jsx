import * as React from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import { charsArrys } from "./charsArrys";

export default function RadioButtonsGroup({ language, setLanguage }) {
  const [value, setValue] = React.useState("en");

  const handleChange = (event) => {
    setValue(event.target.value);
    // const arr =[...event.target.value]
    setLanguage(charsArrys[event.target.value]);
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
        <FormControlLabel value="en" control={<Radio />} label="English" />
        <FormControlLabel value="he" control={<Radio />} label="Hebrew" />
        <FormControlLabel value="special" control={<Radio />} label="Symbol" />
        <FormControlLabel value="emoji" control={<Radio />} label="Emoji" />
        <FormControlLabel value="numbers" control={<Radio />} label="Numbers" />
      </RadioGroup>
    </FormControl>
  );
}
