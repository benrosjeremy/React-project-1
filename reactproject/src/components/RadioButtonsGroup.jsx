import * as React from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";

export default function RadioButtonsGroup({ input, setInput }) {
  const [value, setValue] = React.useState("low");

  const handleChange = (event) => {
    setValue(event.target.value);
    setInput(value === "uperr" ? input.toUpperCase() : input.toLowerCase());
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
        <FormControlLabel value="uperr" control={<Radio />} label="low all" />
        <FormControlLabel value="low" control={<Radio />} label="uperr all" />
      </RadioGroup>
    </FormControl>
  );
}
