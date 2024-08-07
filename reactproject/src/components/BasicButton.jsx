import React from "react";
import Button from "@mui/material/Button";

function BasicButton({ input, setInput, name }) {
  return (
    <div>
      <Button
        variant="contained"
        onClick={() => {
          input.map((item) => {
            name === "uperr all"
              ? (item.char = item.char.toUpperCase())
              : (item.char = item.char.toLowerCase());
          });
          setInput([...input]);
        }}
      >
        {name}
      </Button>
    </div>
  );
}

export default BasicButton;
