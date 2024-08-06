import React from "react";
import Button from "@mui/material/Button";

function BasicButton({ language, setLanguage, name }) {
  return (
    <div>
      <Button variant="contained" onClick={() => setLanguage(language)}>
        {name}
      </Button>
    </div>
  );
}

export default BasicButton;
