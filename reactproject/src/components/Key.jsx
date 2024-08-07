import React from "react";
function Key({ char, input, setInput, fontSize, fontColor }) {
  return (
    <div
      className="key"
      onClick={() => {
        setInput([...input, { char, fontSize, fontColor }]);
      }}
    >
      {char}
    </div>
  );
}

export default Key;
