import React from "react";
import Button from "@mui/material/Button";

function BasicButton({ input, setInput, name}) {
  return (
    <div>
      <Button variant="contained" onClick={() => setInput(input)}>
        {name}
      </Button>
    </div>
  );
}

export default BasicButton;
