import React from "react";

function Key({ char, input, setInput }) {
  return (
    <div
      className="key"
      onClick={() => {
        setInput(input + char);
      }}
    >
      {char}
    </div>
  );
}

export default Key;
